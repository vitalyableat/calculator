import {AddCommand} from "./operations/AddCommand";
import {SubtractCommand} from "./operations/SubtractCommand";
import {MultiplyCommand} from "./operations/MultiplyCommand";
import {DivideCommand} from "./operations/DivideCommand";
import {InversionCommand} from "./operations/InversionCommand";
import {FactorialCommand} from "./operations/FactorialCommand";
import {PowCommand} from "./operations/PowCommand";
import {ModCommand} from "./operations/ModCommand";
import {CALCULATOR, SCOREBOARD} from "../consts";

export const chooseCommand = (command, value = 1) => {
  switch (command) {
    case "+":
      return new AddCommand(value)
    case "-":
      return new SubtractCommand(value)
    case "×":
      return new MultiplyCommand(value)
    case "÷":
      return new DivideCommand(value)
    case "+/-":
      return new InversionCommand()
    case "%":
      return new ModCommand()
    case "!":
      return new FactorialCommand()
    case "x^2":
      return new PowCommand(2)
    case "x^3":
      return new PowCommand(3)
    case "x^n":
      return new PowCommand(value)
    case "10^n":
      return new PowCommand(value)
    case "1/x":
      return new PowCommand(-1)
    case "x^1/2":
      return new PowCommand(1 / 2)
    case "x^1/3":
      return new PowCommand(1 / 3)
    case "x^1/n":
      return new PowCommand(1 / value)
    case "MC":
      CALCULATOR.resetMemory()
      break
    case "M+":
      CALCULATOR.changeMemory(Number(SCOREBOARD.value))
      break
    case "M-":
      CALCULATOR.changeMemory(-Number(SCOREBOARD.value))
      break
    case "MR":
      SCOREBOARD.value = String(CALCULATOR.memory)
      break
  }
}