// importing necessary packages
import colors from "colors";
import type { Operator } from "./types.d.ts";

// importing working functions
import { roundNumber, calculate, evaluateArguments } from "./utilities.ts";

console.log(colors.rainbow("## TypeScript Calculator ##"));
evaluateArguments(process.argv);
