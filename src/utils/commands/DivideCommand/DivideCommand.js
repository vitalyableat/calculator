import {checkOverflow} from "../../validations/checkOverflow";

export class DivideCommand {
  constructor(valueToDivide) {
    this.valueToDivide = valueToDivide
  }

  execute(currentValue) {
    return checkOverflow(currentValue / this.valueToDivide)
  }
}