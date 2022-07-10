import {CALCULATOR, CURRENT_STATE, ERROR, SCOREBOARD} from "../../consts";

export const twoValueCommandValidation = (com) => {
  const isPointOrMinusOrPlus = SCOREBOARD.value === "." || SCOREBOARD.value === "-" || SCOREBOARD.value === "+"
  const invalidValue = !SCOREBOARD.value || (SCOREBOARD.value.length && isPointOrMinusOrPlus) || CURRENT_STATE.signIndex
  const rootFromNegative = com.value === "x^1/n" && Number(SCOREBOARD.value) < 0

  if (CURRENT_STATE.command) {
    ERROR.value = "Perform previous command"
  } else if (invalidValue) {
    ERROR.value = "X value should be one number"
  } else if (rootFromNegative) {
    ERROR.value = "Can't find a root of negative number"
  } else {
    CALCULATOR.resetValue(Number(SCOREBOARD.value))
    SCOREBOARD.value = ""
    CURRENT_STATE.command = com.value
  }
}