const powerOperations = (type, x = 1, n = 1) => {
  switch (type) {
    case 'x^2':
      return power(x, 2)
    case 'x^3':
      return power(x, 3)
    case 'x^n':
      return power(x, n)
    case '10^n':
      return power(10, n)
  }
}


const power = (x, n) => {
  if (n === 1) {
    return x
  }
  return x * power(x, n - 1)
}