import {checkOverflow} from "../../validations/checkOverflow";

export class InversionCommand {
  execute(currentValue) {
    return checkOverflow(-currentValue)
  }
}