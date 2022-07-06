import {CALCULATOR, CURRENT_STATE, SCOREBOARD, SIGN_VALUES} from "../../consts";
import {chooseCommand} from "../chooseCommand";

export const signValidation = (sign) => {
  const signIsMinusOrPlus = sign.value === '-' || sign.value === '+'

  if (SIGN_VALUES.includes(SCOREBOARD.value[SCOREBOARD.value.length - 1])) {
    if ((SCOREBOARD.value.length > 1 && sign.value !== "=") || (SCOREBOARD.value.length === 1 && signIsMinusOrPlus)) {
      SCOREBOARD.value = SCOREBOARD.value.substring(0, SCOREBOARD.value.length - 1) + sign.value
    }
  } else if (SCOREBOARD.value.length) {
    if (CURRENT_STATE.signIndex) {
      let y = Number(SCOREBOARD.value.substring(CURRENT_STATE.signIndex + 1, SCOREBOARD.value.length))
      CALCULATOR.executeCommand(chooseCommand(SCOREBOARD.value[CURRENT_STATE.signIndex], y))
      SCOREBOARD.value = String(CALCULATOR.value)
    } else {
      CALCULATOR.resetValue(Number(SCOREBOARD.value))
    }
    CURRENT_STATE.signIndex = sign.value === "=" ? 0 : SCOREBOARD.value.length
    SCOREBOARD.value += sign.value === "=" ? "" : sign.value
  } else if (signIsMinusOrPlus) {
    SCOREBOARD.value += sign.value
  }
}