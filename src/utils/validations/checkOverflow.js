import {ERROR} from "../../consts";

export const checkOverflow = (value) => {
  if (value > Number.MAX_SAFE_INTEGER || value < Number.MIN_SAFE_INTEGER) {
    ERROR.value = "Overflow"
    ERROR.innerText = "Overflow"
    ERROR.textContent = "Overflow"
    // ERROR.outerHTML = `<input class="errorMessage" id="errorMessage" value="Overflow" readonly/>`
    return 0
  }
  return value
}