export const mod = (x, y) => {
  if (y <= 0) {
    return "error"
  }
  if (x <= 0) {
    return 0
  }

  return  x % y
}