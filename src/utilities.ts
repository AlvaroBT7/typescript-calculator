// importing necessary packages
import colors from "colors";
import type { Operator } from "./types.d.ts";

// working functions
export const roundNumber = (number: number): number => {
  number = Math.round(number);
  return number;
};

export const calculate = (
  a: number,
  b: number,
  op: Operator,
  printText: string
): string => {
  let result: number = 0;
  switch (op) {
    case "add":
      result = a + b;
      break;
    case "substract":
      result = a - b;
      break;
    case "multiply":
      result = a * b;
      break;

    case "divide":
      if (b === 0) throw new Error("⚠️ Cant divide by zero ⚠️");
      result = a / b;
      break;
    default:
      throw new Error("⚠️ Invalid operator ⚠️");
  }
  roundNumber(result);
  return `${printText} ${String(result).bgBlue}`;
};

export const evaluateArguments = (argumentsGiven: string[]): void => {
  if (argumentsGiven.length < 6)
    throw new Error("⚠️ You must introduce the arguments well ⚠️");
  const [, , a, b, op, ...printText] = argumentsGiven;
  const formattedPrintText = printText.join(" ");
  console.log(
    calculate(Number(a), Number(b), op as Operator, formattedPrintText)
  );
};
