import {checkOverflow} from "../../validations/checkOverflow";

export class AddCommand {
  constructor(valueToAdd) {
    this.valueToAdd = valueToAdd
  }

  execute(currentValue) {
    return checkOverflow(currentValue + this.valueToAdd)
  }
}