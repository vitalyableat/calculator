import './styles/main.css'
import {BACKSPACE, CURRENT_STATE, MEMORIES, NUMBERS, POWERS, SCOREBOARD, SIGN_TYPES, SIGNS} from "./consts";
import {pointValidation} from "./utils/validations/pointValidation";
import {arithmeticOperations} from "./utils/operations/arithmeticOperations";
import {powerOperations} from "./utils/operations/powerOperations";
import {factorial} from "./utils/operations/factorial";
import {changeOrientation} from "./utils/operations/changeOrientation";
import {root} from "./utils/operations/root";
import {mod} from "./utils/operations/mod";
import {memoryOperations} from "./utils/operations/memoryOperations";

let memory = 0

SCOREBOARD.addEventListener('input', () => {

})

BACKSPACE.addEventListener('click', () => SCOREBOARD.value = SCOREBOARD.value.substring(0, SCOREBOARD.value.length - 1))

NUMBERS.forEach(num => num.addEventListener('click', () => {
  if (num.value ===".") {
    pointValidation()
  } else {
    SCOREBOARD.value += num.value
  }
}))

SIGNS.forEach(sign => sign.addEventListener('click', () => {
  CURRENT_STATE.signAmount++

  if (CURRENT_STATE.signAmount === 1) {
    CURRENT_STATE.x = Number(SCOREBOARD.value)
    CURRENT_STATE.firstSign = sign.value
    SCOREBOARD.value += sign.value
  } else {
    CURRENT_STATE.secondSign = sign.value === "=" ? "" : sign.value
    CURRENT_STATE.y = Number(SCOREBOARD.value.split(CURRENT_STATE.firstSign)[1])

    CURRENT_STATE.x = arithmeticOperations(CURRENT_STATE.x, CURRENT_STATE.y, CURRENT_STATE.firstSign)
    CURRENT_STATE.firstSign = CURRENT_STATE.secondSign
    CURRENT_STATE.secondSign = ""
    CURRENT_STATE.signAmount = CURRENT_STATE.firstSign ? 1 : 0
    CURRENT_STATE.y = 0

    SCOREBOARD.value = String(CURRENT_STATE.x) + CURRENT_STATE.firstSign
  }
}))

MEMORIES.forEach(mem => mem.addEventListener('click', () => memory = memoryOperations(mem.value, memory)))

POWERS.forEach(pow => pow.addEventListener('click', () => SCOREBOARD.value = String()))