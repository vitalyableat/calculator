import {CALCULATOR, CURRENT_STATE, SCOREBOARD} from "../../consts";
import {chooseCommand} from "../chooseCommand";

export const memoryValidation = (mem) => {
  const isPointOrMinusOrPlus = SCOREBOARD.value === "." || SCOREBOARD.value === "-" || SCOREBOARD.value === "+"
  const isNotOneNumber = !SCOREBOARD.value || (SCOREBOARD.value.length && isPointOrMinusOrPlus) || CURRENT_STATE.signIndex

  if ((mem.value === "M+" || mem.value === "M-") && isNotOneNumber) {
    console.log("Need one number")
  } else {
    chooseCommand(mem.value)
  }
}