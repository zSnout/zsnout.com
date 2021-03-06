import { WebGlCanvas } from "./WebGlCanvas";
import { params } from "../useOption";
import { useResizeObserver } from "@vueuse/core";

export class CoordinateCanvas2d extends WebGlCanvas {
  private saveBounds: boolean;
  private navTimer = true;

  bounds!: Readonly<Bounds>;

  constructor(
    canvas: HTMLCanvasElement,
    {
      bounds,
      fragmentString: frag,
      saveBounds,
      ...options
    }: CoordinateCanvas2d.Options = {}
  ) {
    super(canvas, { ...options, fragmentString: frag });

    this.saveBounds = saveBounds ?? false;

    if (saveBounds) {
      bounds = {
        xStart: Number.isFinite(+params.xStart) ? +params.xStart : -2,
        xEnd: Number.isFinite(+params.xEnd) ? +params.xEnd : 2,
        yStart: Number.isFinite(+params.yStart) ? +params.yStart : -2,
        yEnd: Number.isFinite(+params.yEnd) ? +params.yEnd : 2,
      };
    }

    this.setBounds({
      xStart: bounds?.xStart ?? -2,
      xEnd: bounds?.xEnd ?? 2,
      yStart: bounds?.yStart ?? -2,
      yEnd: bounds?.yEnd ?? 2,
    });

    useResizeObserver(this.canvas, () => this.setBounds(this.bounds));
  }

  getNormalizedBounds() {
    let { xStart, xEnd, yStart, yEnd } = this.bounds;

    const xCenter = xStart + xEnd;
    const yCenter = yStart + yEnd;
    const xRange = (xEnd - xStart) / 2;
    const yRange = (yEnd - yStart) / 2;

    const { width, height } = this.canvas;

    if (width > height) {
      xStart = xCenter - (width / height) * xRange;
      xEnd = xCenter + (width / height) * xRange;
    } else {
      yStart = yCenter - (height / width) * yRange;
      yEnd = yCenter + (height / width) * yRange;
    }

    return { xStart, xEnd, yStart, yEnd };
  }

  getAdjusters() {
    const { width, height } = this.canvas;
    const { xStart, xEnd, yStart, yEnd } = this.getNormalizedBounds();

    if (width > height) {
      return {
        scale: {
          x: xEnd - xStart,
          y: yEnd - yStart,
        } as Coordinates,
        offset: {
          x: (xStart - (xEnd - xStart) / 2) / 2,
          y: yStart,
        } as Coordinates,
      };
    } else {
      return {
        scale: {
          x: xEnd - xStart,
          y: yEnd - yStart,
        } as Coordinates,
        offset: {
          x: xStart,
          y: (yStart - (yEnd - yStart) / 2) / 2,
        } as Coordinates,
      };
    }
  }

  setBounds(bounds: Bounds) {
    const { xStart, xEnd, yStart, yEnd } = (this.bounds = bounds);

    if (this.saveBounds && this.navTimer) {
      params.xStart = "" + xStart;
      params.xEnd = "" + xEnd;
      params.yStart = "" + yStart;
      params.yEnd = "" + yEnd;

      this.navTimer = false;
      setTimeout(() => (this.navTimer = true), 1000);
    }

    const { offset, scale } = this.getAdjusters();
    this.setUniform("u_offset", offset.x, offset.y);
    this.setUniform("u_scale", scale.x, scale.y);
  }

  /** This function expects that the pixel values are relative to the canvas's top-left corner. */
  pxToCoords(x: number, y: number): Coordinates {
    const { offset, scale } = this.getAdjusters();

    return {
      x: (x / this.canvas.clientWidth) * scale.x + offset.x,
      y: (1 - y / this.canvas.clientHeight) * scale.y + offset.y,
    };
  }

  mouseToCoords() {
    return this.pxToCoords(
      this.mouse.x,
      this.canvas.clientHeight - this.mouse.y
    );
  }
}

export namespace CoordinateCanvas2d {
  export interface Options extends WebGlCanvas.Options {
    bounds?: Partial<Bounds>;
    saveBounds?: boolean;
  }
}

export interface Bounds {
  xStart: number;
  xEnd: number;
  yStart: number;
  yEnd: number;
}

export interface Coordinates {
  x: number;
  y: number;
}
