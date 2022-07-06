import './styles/main.css'
import {BACKSPACE, NUMBERS, SIGNS} from "./consts";
import {numberValidation} from "./utils/validations/numberValidation";
import {signValidation} from "./utils/validations/signValidation";
import {backspaceValidation} from "./utils/validations/backspaceValidation";

BACKSPACE.addEventListener('click', backspaceValidation)

NUMBERS.forEach(num => num.addEventListener('click', () => numberValidation(num)))

SIGNS.forEach(sign => sign.addEventListener('click', () => signValidation(sign)))



//SCOREBOARD.addEventListener('input', () => {})
//BACKSPACE.addEventListener('click', () => SCOREBOARD.value = SCOREBOARD.value.substring(0, SCOREBOARD.value.length - 1))
//let memory = 0
//MEMORIES.forEach(mem => mem.addEventListener('click', () => memory = memoryOperations(mem.value, memory)))
//POWERS.forEach(pow => pow.addEventListener('click', () => SCOREBOARD.value = String()))