import {AddCommand} from "../commands/AddComand/AddCommand";
import {SubtractCommand} from "../commands/SubtractCommand/SubtractCommand";
import {MultiplyCommand} from "../commands/MultiplyCommand/MultiplyCommand";
import {DivideCommand} from "../commands/DivideCommand/DivideCommand";



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