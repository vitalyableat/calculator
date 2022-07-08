import {CALCULATOR, CURRENT_STATE, ERROR_MESSAGE, SCOREBOARD} from "../../consts";

export const twoValueCommandValidation = (com) => {
  const isPointOrMinusOrPlus = SCOREBOARD.value === "." || SCOREBOARD.value === "-" || SCOREBOARD.value === "+"
  if (CURRENT_STATE.command) {
    ERROR_MESSAGE.innerHTML = "Perform previous command"
  } else if (!SCOREBOARD.value || (SCOREBOARD.value.length && isPointOrMinusOrPlus) || CURRENT_STATE.signIndex) {
    ERROR_MESSAGE.innerHTML = "Write X value"
  } else {
    CALCULATOR.resetValue(Number(SCOREBOARD.value))
    SCOREBOARD.value = ""
    CURRENT_STATE.command = com.value
  }
}