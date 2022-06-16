import{F as n}from"./useWebGL.06ea15ae.js";import{u as t}from"./useMovableCanvas.f08882c0.js";import{d as a,m as r,c as i,a as s,o as l,b as o}from"./index.eb0ca499.js";import"./Modal.7d3241da.js";const u=o("p",null,[o("strong",null,"What is this?")],-1),d=o("p",null," This is a WebGL debug page. It should contain a simple rendition of the Mandelbrot Set. This is used for testing purposes and helps demonstrate different features of the MovableCanvas mixin. The page may show a blue box where the viewport is located, which should be centered onscreen. It may also show a pink/red box displaying where the canvas will be moved to upon zooming. There is also a small box around where the cursor is located. ",-1),v=a({__name:"Mandelbrot",setup(c){const e=r();return t(e,"in vec2 pos;out vec4 color;uniform Bounds bounds;uniform Coordinates pointer;uniform Bounds zoomRegion;void useRect(in Bounds bounds,float r,float g,float b){if(bounds.xStart<=pos.x&&pos.x<=bounds.xEnd&&bounds.yStart<=pos.y&&pos.y<=bounds.yEnd){color.r+=r;color.g+=g;color.b+=b;}}void main(){vec2 z;color=vec4(0,0,0,1);for(int i=0;i<100;i++){z=vec2(z.x*z.x-z.y*z.y,2.0*z.x*z.y)+pos;if(z.x*z.x+z.y*z.y>4.0){color=vec4(float(i)/100.0,float(i)/100.0,float(i)/100.0,1);}}useRect(zoomRegion,0.0,0.0,0.2);useRect(bounds,0.2,0.0,0.0);if(abs(pointer.x-pos.x)<(bounds.xEnd-bounds.xStart)/100.0&&abs(pointer.y-pos.y)<(bounds.yEnd-bounds.yStart)/100.0){color=vec4(color.zz,color.z+0.2,1);}}",{uniforms:!0}),(p,f)=>(l(),i(n,null,{options:s(()=>[u,d]),default:s(()=>[o("canvas",{ref_key:"canvas",ref:e},null,512)]),_:1}))}});export{v as default};