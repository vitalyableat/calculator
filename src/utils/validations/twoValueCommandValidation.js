import {CALCULATOR, CURRENT_STATE, SCOREBOARD} from "../../consts";

export const twoValueCommandValidation = (com) => {
  const isPointOrMinusOrPlus = SCOREBOARD.value === "." || SCOREBOARD.value === "-" || SCOREBOARD.value === "+"
  if (CURRENT_STATE.command) {
    console.log("Perform previous command")
  } else if (!SCOREBOARD.value || (SCOREBOARD.value.length && isPointOrMinusOrPlus) || CURRENT_STATE.signIndex) {
    console.log("Write X value")
  } else {
    CALCULATOR.resetValue(Number(SCOREBOARD.value))
    SCOREBOARD.value = ""
    CURRENT_STATE.command = com.value
  }
}