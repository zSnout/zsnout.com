import { computed } from "@vue/reactivity";
import { Ref } from "vue";
import { Expression, useCompileLambda } from "./useCompileLambda";

function churchNumeral(fn: any): number {
  try {
    return fn((x: number) => x + 1)(0);
  } catch (e) {
    console.error(e);
    return 0;
  }
}

const special = {
  "+": "_add",
  "-": "_sub",
  "*": "_mult",
  "/": "_div",
  "%": "_mod",
  "@": "_at",
  "?": "_ques",
  "!": "_exclm",
  ":": "_colon",
  "_": "__",
  "#": "_hash",
  "$": "$",
  "^": "_pos",
  "&": "_amp",
  "|": "_bar",
  "~": "_tilde",
  ";": "_semi",
  "'": "_apos",
  '"': "_quote",
  "__proto__": null,
};

function normalizeVar(name: string) {
  name = name
    .split("")
    .map((e) => (e in special ? (special as any)[e] : e))
    .join("");

  if (name.match(/^\d/)) {
    return `_${name}`;
  }

  return name;
}

function indent(text: string): string {
  return text.split(/\n+/g).join("\n  ");
}

export function toJS(expr: Expression): string {
  if (expr.type === "variable") {
    return normalizeVar(expr.name);
  } else if (expr.type === "application") {
    const output = toJS(expr.rhs);

    if (output.length > 60) {
      return `${toJS(expr.lhs)}(\n  ${indent(output)}\n)`;
    } else {
      return `${toJS(expr.lhs)}(${output})`;
    }
  } else {
    const output = toJS(expr.expr);

    if (output.length > 60) {
      return `(${normalizeVar(expr.variable)} =>\n  ${indent(output)}\n)`;
    } else {
      return `(${normalizeVar(expr.variable)} => ${output})`;
    }
  }
}

function evaluate(expr: Expression) {
  try {
    return eval(toJS(expr));
  } catch (e) {
    return e;
  }
}

export function useEvaluateLambda(source: Ref<string>) {
  const expr = useCompileLambda(source);

  return computed(() => {
    try {
      if (typeof expr.value === "string") {
        return expr.value;
      }

      const result = evaluate(expr.value);

      if (typeof result === "string") {
        return result;
      }

      const numeral = churchNumeral(result);
      return numeral;
    } catch (e: any) {
      return "" + e;
    }
  });
}

export function useJavaScriptLambda(source: Ref<string>) {
  const expr = useCompileLambda(source);

  return computed(() => {
    try {
      if (typeof expr.value === "string") {
        return expr.value;
      }

      const result = evaluate(expr.value);

      if (typeof result === "string") {
        return result;
      }

      const numeral = churchNumeral(result);
      return numeral;
    } catch (e: any) {
      return "" + e;
    }
  });
}