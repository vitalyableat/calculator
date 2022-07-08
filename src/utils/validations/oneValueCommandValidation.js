import {CALCULATOR, CURRENT_STATE, SCOREBOARD} from "../../consts";
import {chooseCommand} from "../chooseCommand";

export const oneValueCommandValidation = (com) => {
  const isPointOrMinusOrPlus = SCOREBOARD.value === "." || SCOREBOARD.value === "-" || SCOREBOARD.value === "+"
  if (!SCOREBOARD.value || (SCOREBOARD.value.length && isPointOrMinusOrPlus) || CURRENT_STATE.signIndex) {
    console.log("Need one number")
  } else if (Number(SCOREBOARD.value) === 0 && com.value === "1/x") {
    console.log("Division by 0")
  } else if (Number(SCOREBOARD.value) < 0 && (com.value === "x^1/2" || com.value === "!")) {
    console.log("Should be positive")
  } else if (SCOREBOARD.value.includes(".") && com.value === "!") {
    console.log("Should be integer")
  } else if (com.value === "10^n") {
    CALCULATOR.resetValue(10)
    CALCULATOR.executeCommand(chooseCommand(com.value, Number(SCOREBOARD.value)))
    SCOREBOARD.value = String(CALCULATOR.value)
  } else {
    CALCULATOR.resetValue(Number(SCOREBOARD.value))
    CALCULATOR.executeCommand(chooseCommand(com.value))
    SCOREBOARD.value = String(CALCULATOR.value)
  }
}