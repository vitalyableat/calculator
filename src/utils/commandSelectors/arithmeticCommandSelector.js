import {AddCommand} from "../operations/AddComand/AddCommand";
import {SubtractCommand} from "../operations/SubtractCommand/SubtractCommand";
import {MultiplyCommand} from "../operations/MultiplyCommand/MultiplyCommand";
import {DivideCommand} from "../operations/DivideCommand/DivideCommand";

export const arithmeticCommandSelector = (command, value) => {
  switch (command) {
    case "+":
      return new AddCommand(value)
    case "-":
      return new SubtractCommand(value)
    case "×":
      return new MultiplyCommand(value)
    case "÷":
      return new DivideCommand(value)
  }
}