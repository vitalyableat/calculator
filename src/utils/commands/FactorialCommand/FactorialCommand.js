import {checkOverflow} from "../../validations/checkOverflow";

export class FactorialCommand {

  execute(currentValue) {
    return checkOverflow(factorial(1, currentValue))
  }
}

const factorial = (val = 1, n) => {
  if (n > 18) {
    return Number.MAX_SAFE_INTEGER + 1
  }
  if (n < 0) {
    return -factorial(val, -n)
  }
  if (n === 1 || n === 0) {
    return val
  }
  return factorial(val * n, n - 1)
}