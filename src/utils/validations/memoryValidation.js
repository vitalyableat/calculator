import {CURRENT_STATE, ERROR, SCOREBOARD} from "../../consts";
import {errorHandler} from "./errorHandler";
import {memoryCommandSelector} from "../commandSelectors/memoryCommandSelector";

export const memoryValidation = (mem) => {
  const isPointOrMinusOrPlus = SCOREBOARD.value === "." || SCOREBOARD.value === "-" || SCOREBOARD.value === "+"
  const isNotOneNumber = !SCOREBOARD.value || (SCOREBOARD.value.length && isPointOrMinusOrPlus) || CURRENT_STATE.signIndex

  if ((mem.value === "M+" || mem.value === "M-") && isNotOneNumber) {
    ERROR.value = "Need one number"
  } else {
    mem.value === "MC" && errorHandler()
    memoryCommandSelector(mem.value)
  }
}