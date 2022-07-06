export const factorial = (val, n) => {
  if (n === 1) {
    return val
  }
  return factorial(val * n, n - 1)
}