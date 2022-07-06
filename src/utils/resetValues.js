import {CURRENT_STATE} from "../consts";

export const resetValues = (x, y, firstSign, secondSign, signAmount) => {
  CURRENT_STATE.x = x
  CURRENT_STATE.y = y
  CURRENT_STATE.firstSign = firstSign
  CURRENT_STATE.secondSign = secondSign
  CURRENT_STATE.signAmount = signAmount
}