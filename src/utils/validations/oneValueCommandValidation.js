import {CALCULATOR, CURRENT_STATE, ERROR, SCOREBOARD} from "../../consts";
import {oneValueCommandSelector} from "../commandSelectors/oneValueCommandSelector";

export const oneValueCommandValidation = (com) => {
  const isPointOrMinusOrPlus = SCOREBOARD.value === "." || SCOREBOARD.value === "-" || SCOREBOARD.value === "+"
  const invalidValue = !SCOREBOARD.value || (SCOREBOARD.value.length && isPointOrMinusOrPlus) || CURRENT_STATE.signIndex
  const divisionByZero = Number(SCOREBOARD.value) === 0 && com.value === "1/x"
  const rootFromNegative = Number(SCOREBOARD.value) < 0 && (com.value === "x^1/2" || com.value === "x^1/3")
  const factorialFromRealNumber = SCOREBOARD.value.includes(".") && com.value === "!"

  if (CURRENT_STATE.command) {
    ERROR.value = "Perform previous command"
  } else if (invalidValue) {
    ERROR.value = "The value should be one number"
  } else if (divisionByZero) {
    ERROR.value = "Division by 0"
  } else if (rootFromNegative) {
    ERROR.value = "Can't find a root of negative number"
  } else if (factorialFromRealNumber) {
    ERROR.value = "Can't find factorial of a real number"
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