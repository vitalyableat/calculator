export const SCOREBOARD = document.getElementById("scoreboard")
export const NUMBERS = document.querySelectorAll("button.number")
export const SIGNS = document.getElementsByName("sign")
export const MEMORIES = document.getElementsByName("memory")
export const POWERS = document.getElementsByName("pow")
export const ROOTS = document.getElementsByName("root")
export const ONE_VALUE_OPERATIONS = document.getElementsByName("oneValueOperations")
export const MOD = document.getElementById("mod")
export const BACKSPACE = document.getElementById("backspace")


export const SIGN_TYPES = ["+", "-", "÷", "×"]

export const DEFAULT_STATE = {
  x: 0,
  y: 0,
  firstSign: "",
  secondSign: "",
  signAmount: 0
}

export const CURRENT_STATE = DEFAULT_STATE