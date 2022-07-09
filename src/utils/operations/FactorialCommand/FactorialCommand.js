export class FactorialCommand {

  execute(currentValue) {
    return factorial(1, currentValue)
  }

  undo(currentValue) {
    return undoFactorial(currentValue, 1)
  }
}

const factorial = (val = 1, n) => {
  if (n < 0) {
    return -factorial(val, -n)
  }
  if (n === 1 || n === 0) {
    return val
  }
  return factorial(val * n, n - 1)
}

const undoFactorial = (val, n) => {
  if (val < 0) {
    return -undoFactorial(-val, n)
  }
  if (val === 1) {
    return n - 1
  }
  return undoFactorial(val / n, n + 1)
}