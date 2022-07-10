import {PowCommand} from "../commands/PowCommand/PowCommand";

export const twoValueCommandSelector = (command, value) => {
  switch (command) {
    case "x^n":
      return new PowCommand(value)
    case "x^1/n":
      return new PowCommand(1 / value)
  }
}