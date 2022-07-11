import {pointValidation} from "./pointValidation";
import {SCOREBOARD} from "../../const";

export const numberValidation = (num) => {
  if (num.value === ".") {
    pointValidation()
  } else {
    SCOREBOARD.value += num.value
  }
}