import {CURRENT_STATE, SCOREBOARD} from "../../consts";

export const backspaceValidation = () => {
  if (CURRENT_STATE.signIndex >= SCOREBOARD.value.length - 1) {
    CURRENT_STATE.signIndex = 0
  }
  SCOREBOARD.value = SCOREBOARD.value.substring(0, SCOREBOARD.value.length - 1)
}