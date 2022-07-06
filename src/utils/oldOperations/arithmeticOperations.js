export const arithmeticOperations = (x, y, sign) => {
  switch (sign) {
    case "+":
      return x + y
    case "-":
      return x - y
    case "÷":
      return x / y
    case "×":
      return x * y
  }
}