import {CALCULATOR, ERROR_MESSAGE, SCOREBOARD} from "../../consts";
import {errorHandler} from "./errorHandler";

export const prevValueValidation = () => {
  if (CALCULATOR.history.length) {
    errorHandler()
    CALCULATOR.undo()
    SCOREBOARD.value = String(CALCULATOR.value)
  } else {
    ERROR_MESSAGE.innerHTML = "No more history with this number"
  }
}