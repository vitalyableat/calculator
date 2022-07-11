import {CURRENT_STATE, ERROR} from "../../const";

export const errorHandler = () => {
  if (CURRENT_STATE.overflow) {
    ERROR.value = "Value is out of range"
    CURRENT_STATE.overflow = false
  } else {
    ERROR.value ? ERROR.value = "" : ""
  }
}
