import {CURRENT_STATE, ERROR} from "../../const";

export const checkOverflow = (value) => {
  if (value > Number.MAX_SAFE_INTEGER || value < Number.MIN_SAFE_INTEGER) {
    CURRENT_STATE.overflow = true
    return 0
  }
  return value
}