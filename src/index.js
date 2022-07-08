import './styles/main.css'
import {
  BACKSPACE,
  DARK_THEME_BTN,
  LIGHT_THEME_BTN,
  MEMORIES,
  NUMBERS,
  ONE_VALUE_COMMANDS, PREV_VALUE_BTN,
  SIGNS,
  TWO_VALUE_COMMANDS
} from "./consts";
import {numberValidation} from "./utils/validations/numberValidation";
import {signValidation} from "./utils/validations/signValidation";
import {backspaceValidation} from "./utils/validations/backspaceValidation";
import {oneValueCommandValidation} from "./utils/validations/oneValueCommandValidation";
import {twoValueCommandValidation} from "./utils/validations/twoValueCommandValidation";
import {memoryValidation} from "./utils/validations/memoryValidation";
import {themeChangeDark, themeChangeLight} from "./utils/themeChange";
import {prevValueValidation} from "./utils/validations/prevValueValidation";


BACKSPACE.addEventListener('click', backspaceValidation)

NUMBERS.forEach(num => num.addEventListener('click', () => numberValidation(num)))

SIGNS.forEach(sign => sign.addEventListener('click', () => signValidation(sign)))

ONE_VALUE_COMMANDS.forEach(com => com.addEventListener('click', () => oneValueCommandValidation(com)))

TWO_VALUE_COMMANDS.forEach(com => com.addEventListener('click', () => twoValueCommandValidation(com)))

MEMORIES.forEach(mem => mem.addEventListener('click', () => memoryValidation(mem)))

DARK_THEME_BTN.addEventListener('click', themeChangeDark)
LIGHT_THEME_BTN.addEventListener('click', themeChangeLight)

PREV_VALUE_BTN.addEventListener('click', prevValueValidation)
