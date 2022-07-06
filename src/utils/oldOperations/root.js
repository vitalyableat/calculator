export const root = (x, n) => {
  if (x < 0) {
    if (n % 2 === 1) {
      return - ((-x) ** (1 / n))
    } else {
      return "error"
    }
  }
  return x ** (1 / n)
}