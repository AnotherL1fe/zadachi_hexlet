function calculateFactorial(n) {
  if (n < 0 || !Number.isInteger(n)) {
    throw new Error('Факториал определён только для неотрицательных целых чисел');
  }

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(calculateFactorial(5));
console.log(calculateFactorial(0));