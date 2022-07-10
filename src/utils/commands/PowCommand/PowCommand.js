import {checkOverflow} from "../../validations/checkOverflow";

export class PowCommand {
  constructor(valueToPow) {
    this.valueToPow = valueToPow
  }

  execute(currentValue) {
    return checkOverflow(currentValue ** this.valueToPow)
  }
}