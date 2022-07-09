import {CALCULATOR, CURRENT_STATE, ERROR_MESSAGE, SCOREBOARD} from "../../consts";
import {oneValueCommandSelector} from "../commandSelectors/oneValueCommandSelector";

export const oneValueCommandValidation = (com) => {
  const isPointOrMinusOrPlus = SCOREBOARD.value === "." || SCOREBOARD.value === "-" || SCOREBOARD.value === "+"
  if (CURRENT_STATE.command) {
    ERROR_MESSAGE.innerHTML = "Perform previous command"
  } else if (!SCOREBOARD.value || (SCOREBOARD.value.length && isPointOrMinusOrPlus) || CURRENT_STATE.signIndex) {
    ERROR_MESSAGE.innerHTML = "Need one number"
  } else if (Number(SCOREBOARD.value) === 0 && com.value === "1/x") {
    ERROR_MESSAGE.innerHTML = "Division by 0"
  } else if (Number(SCOREBOARD.value) < 0 && com.value === "x^1/2") {
    ERROR_MESSAGE.innerHTML = "Should be positive"
  } else if (SCOREBOARD.value.includes(".") && com.value === "!") {
    ERROR_MESSAGE.innerHTML = "Should be integer"
  } else if (com.value === "10^n") {
    CALCULATOR.resetValue(10)
    CALCULATOR.executeCommand(oneValueCommandSelector(com.value, Number(SCOREBOARD.value)))
    SCOREBOARD.value = String(CALCULATOR.value)
  } else {
    CALCULATOR.resetValue(Number(SCOREBOARD.value))
    CALCULATOR.executeCommand(oneValueCommandSelector(com.value))
    SCOREBOARD.value = String(CALCULATOR.value)
  }
}