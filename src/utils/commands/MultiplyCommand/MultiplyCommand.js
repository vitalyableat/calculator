import {checkOverflow} from "../../validations/checkOverflow";

export class MultiplyCommand {
  constructor(valueToMultiply) {
    this.valueToMultiply = valueToMultiply
  }

  execute(currentValue) {
    return checkOverflow(currentValue * this.valueToMultiply)
  }
}