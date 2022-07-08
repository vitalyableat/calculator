import {CALCULATOR, SCOREBOARD} from "../../consts";

export const prevValueValidation = () => {
  if (CALCULATOR.history.length) {
    CALCULATOR.undo()
    SCOREBOARD.value = String(CALCULATOR.value)
  } else {
    console.log("No more history with this number")
  }
}