import {AddCommand} from "./operations/AddCommand";
import {SubtractCommand} from "./operations/SubtractCommand";
import {MultiplyCommand} from "./operations/MultiplyCommand";
import {DivideCommand} from "./operations/DivideCommand";

export const chooseCommand = (command, value) => {
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