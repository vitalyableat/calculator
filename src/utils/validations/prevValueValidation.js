import {CALCULATOR, CURRENT_STATE, ERROR, SCOREBOARD} from "../../const";
import {errorHandler} from "./errorHandler";

export const prevValueValidation = () => {
  if (CURRENT_STATE.command) {
    SCOREBOARD.value = String(CALCULATOR.value)
    CURRENT_STATE.command = ""
  } else if (CALCULATOR.history.length) {
    errorHandler()
    CALCULATOR.undo()
    SCOREBOARD.value = String(CALCULATOR.value)
  } else {
    ERROR.value = "No more history with this number"
  }
}