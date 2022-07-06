import './styles/main.css'
import {BACKSPACE, CALCULATOR, CURRENT_STATE, MEMORIES, NUMBERS, POWERS, SCOREBOARD, SIGN_TYPES, SIGNS} from "./consts";
import {pointValidation} from "./utils/validations/pointValidation";
import {chooseCommand} from "./utils/chooseCommand";

BACKSPACE.addEventListener('click', () => {
  if (CURRENT_STATE.signIndex >= SCOREBOARD.value.length - 1) {
    CURRENT_STATE.signIndex = 0
  }
  SCOREBOARD.value = SCOREBOARD.value.substring(0, SCOREBOARD.value.length - 1)
})

NUMBERS.forEach(num => num.addEventListener('click', () => {
  if (num.value === ".") {
    pointValidation()
  } else {
    SCOREBOARD.value += num.value
  }
}))

SIGNS.forEach(sign => sign.addEventListener('click', () => {
  if (SCOREBOARD.value.length) {
    if (CURRENT_STATE.signIndex) {
      let y = Number(SCOREBOARD.value.substring(CURRENT_STATE.signIndex + 1, SCOREBOARD.value.length))
      CALCULATOR.executeCommand(chooseCommand(SCOREBOARD.value[CURRENT_STATE.signIndex], y))
      SCOREBOARD.value = String(CALCULATOR.value)
    } else {
      CALCULATOR.resetValue(Number(SCOREBOARD.value))
    }
    CURRENT_STATE.signIndex = sign.value === "=" ? 0 : SCOREBOARD.value.length
  }

  SCOREBOARD.value += sign.value === "=" ? "" : sign.value
}))



//SCOREBOARD.addEventListener('input', () => {})
//BACKSPACE.addEventListener('click', () => SCOREBOARD.value = SCOREBOARD.value.substring(0, SCOREBOARD.value.length - 1))
//let memory = 0
//MEMORIES.forEach(mem => mem.addEventListener('click', () => memory = memoryOperations(mem.value, memory)))
//POWERS.forEach(pow => pow.addEventListener('click', () => SCOREBOARD.value = String()))