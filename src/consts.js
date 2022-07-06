import {Calculator} from "./Calculator";

export const CALCULATOR = new Calculator()

export const SCOREBOARD = document.getElementById("scoreboard")
export const NUMBERS = document.querySelectorAll("button.number")
export const SIGNS = document.getElementsByName("sign")
export const BACKSPACE = document.getElementById("backspace")

//didn't use
export const MEMORIES = document.getElementsByName("memory")
export const POWERS = document.getElementsByName("pow")
export const ROOTS = document.getElementsByName("root")
export const ONE_VALUE_OPERATIONS = document.getElementsByName("oneValueOperations")
export const MOD = document.getElementById("mod")

export const SIGN_VALUES = ["+", "-", "×", "÷"]

export const CURRENT_STATE = {
  x: 0,
  y: 0,
  signIndex: 0,
}