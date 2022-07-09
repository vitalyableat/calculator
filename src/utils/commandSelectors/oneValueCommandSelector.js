import {InversionCommand} from "../operations/InversionCommand/InversionCommand";
import {PercentageCommand} from "../operations/PercentageCommand/PercentageCommand";
import {FactorialCommand} from "../operations/FactorialCommand/FactorialCommand";
import {PowCommand} from "../operations/PowCommand/PowCommand";

export const oneValueCommandSelector = (command, value = 1) => {
  switch (command) {
    case "+/-":
      return new InversionCommand()
    case "%":
      return new PercentageCommand()
    case "!":
      return new FactorialCommand()
    case "x^2":
      return new PowCommand(2)
    case "x^3":
      return new PowCommand(3)
    case "10^n":
      return new PowCommand(value)
    case "1/x":
      return new PowCommand(-1)
    case "x^1/2":
      return new PowCommand(1 / 2)
    case "x^1/3":
      return new PowCommand(1 / 3)
  }
}