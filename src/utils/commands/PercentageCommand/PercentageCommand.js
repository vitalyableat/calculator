import {checkOverflow} from "../../validations/checkOverflow";

export class PercentageCommand {
  execute(currentValue) {
    return checkOverflow(currentValue / 100)
  }
}