import {CURRENT_STATE, ERROR_MESSAGE, SCOREBOARD} from "../../consts";

export const pointValidation = () => {
  const isFirstIncludesPoint = SCOREBOARD.value.includes(".")
  const isSecondIncludesPoint = SCOREBOARD.value.substring(CURRENT_STATE.signIndex + 1, SCOREBOARD.value.length).includes(".")

  const firstCondition = !CURRENT_STATE.signIndex && !isFirstIncludesPoint
  const secondCondition = CURRENT_STATE.signIndex && !isSecondIncludesPoint

  if (firstCondition || secondCondition) {
      SCOREBOARD.value += "."
  } else {
    ERROR_MESSAGE.innerHTML = "Only one point in number allowed"
  }
}