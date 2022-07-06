import {CURRENT_STATE, SCOREBOARD} from "../../consts";

export const pointValidation = () => {
  const checkFirstNumWithPoint = SCOREBOARD.value.includes(".")
  const checkSecondNumWithPoint = SCOREBOARD.value.split(CURRENT_STATE.firstSign)[1].includes(".")

  const canAddPointToFirstNum = !CURRENT_STATE.signAmount && !checkFirstNumWithPoint
  const canAddPointToSecondNum = CURRENT_STATE.signAmount && !checkSecondNumWithPoint

  if (canAddPointToFirstNum || canAddPointToSecondNum) {
    SCOREBOARD.value += '.'
  }
}