import {checkOverflow} from "../../validations/checkOverflow";

export class SubtractCommand {
  constructor(valueToSubtract) {
    this.valueToSubtract = valueToSubtract
  }

  execute(currentValue) {
    return checkOverflow(currentValue - this.valueToSubtract)
  }
}