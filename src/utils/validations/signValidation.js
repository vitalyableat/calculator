import {CALCULATOR, CURRENT_STATE, ERROR, SCOREBOARD, SIGN_VALUES} from "../../const";
import {arithmeticCommandSelector} from "../commandSelectors/arithmeticCommandSelector";
import {twoValueCommandSelector} from "../commandSelectors/twoValueCommandSelector";

export const signValidation = (sign) => {
  const startOfInput = !SCOREBOARD.value || SCOREBOARD.value === '-'
  const lastSymbolIsSign = SIGN_VALUES.includes(SCOREBOARD.value[SCOREBOARD.value.length - 1])

  if (startOfInput) {
    startWithSign(sign)
  } else if (lastSymbolIsSign) {
    replaceSign(sign)
  } else if (CURRENT_STATE.command) {
    twoSignCommandHandler(sign)
  } else {
    arithmeticCommandHandler(sign)
  }
}

const startWithSign = (sign) => {
  if (sign.value === '-' && !SCOREBOARD.value) {
    SCOREBOARD.value += sign.value
  } else if (sign.value === '+') {
    SCOREBOARD.value = ''
  }
}

const replaceSign = (sign) => {
  const canAddMinus = sign.value === "-" && CURRENT_STATE.signIndex === SCOREBOARD.value.length - 1
  const lastTwoSymbolsAreSigns = CURRENT_STATE.signIndex && CURRENT_STATE.signIndex !== SCOREBOARD.value.length - 1

  if (canAddMinus) {
    SCOREBOARD.value += sign.value
  } else if (lastTwoSymbolsAreSigns && sign.value !== '=') {
    SCOREBOARD.value = SCOREBOARD.value.substring(0, SCOREBOARD.value.length - 2) + sign.value
  } else if (sign.value !== '='){
    SCOREBOARD.value = SCOREBOARD.value.substring(0, SCOREBOARD.value.length - 1) + sign.value
  }
}

const twoSignCommandHandler = (sign) => {
  const invalidValue = !SCOREBOARD.value || !Number.isFinite(Number(SCOREBOARD.value))
  const divisionByZero = Number(SCOREBOARD.value) === 0 && CURRENT_STATE.command === "x^1/n"
  const rootFromNegative = CALCULATOR.value < 0 && (Number(SCOREBOARD.value) < 1 && Number(SCOREBOARD.value) > - 1)

  if (invalidValue) {
    ERROR.value = "N value should be one number"
  } else if (divisionByZero) {
    ERROR.value = "Division by 0"
  } else if (rootFromNegative) {
    ERROR.value = "Can't find a root of negative number"
  } else {
    CALCULATOR.executeCommand(twoValueCommandSelector(CURRENT_STATE.command, Number(SCOREBOARD.value)))
    SCOREBOARD.value = String(CALCULATOR.value)
    CURRENT_STATE.command = ""
    CURRENT_STATE.overflow = ERROR.value === "Value is out of range" ? true : false
    CURRENT_STATE.signIndex = sign.value === "=" ? 0 : SCOREBOARD.value.length
    SCOREBOARD.value += sign.value === "=" ? "" : sign.value
  }
}

const arithmeticCommandHandler = (sign) => {
  if (CURRENT_STATE.signIndex) {
    let y = Number(SCOREBOARD.value.substring(CURRENT_STATE.signIndex + 1, SCOREBOARD.value.length))
    const divisionByZero = y === 0 && SCOREBOARD.value[CURRENT_STATE.signIndex] === "÷"

    if (divisionByZero) {
      ERROR.value = "Division by 0"
    } else {
      CALCULATOR.executeCommand(arithmeticCommandSelector(SCOREBOARD.value[CURRENT_STATE.signIndex], y))
      SCOREBOARD.value = String(CALCULATOR.value)
      CURRENT_STATE.overflow = ERROR.value === "Value is out of range" ? true : false
      CURRENT_STATE.signIndex = sign.value === "=" ? 0 : SCOREBOARD.value.length
      SCOREBOARD.value += sign.value === "=" ? "" : sign.value
    }
  } else {
    CALCULATOR.resetValue(Number(SCOREBOARD.value))
    CURRENT_STATE.signIndex = sign.value === "=" ? 0 : SCOREBOARD.value.length
    SCOREBOARD.value += sign.value === "=" ? "" : sign.value
  }
}