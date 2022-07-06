import {pointValidation} from "./pointValidation";
import {SCOREBOARD} from "../../consts";

export const numberValidation = (num) => {
  if (num.value === ".") {
    pointValidation()
  } else {
    SCOREBOARD.value += num.value
  }
}