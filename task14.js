function sumOfDigits(num) {
  const str = Math.abs(num).toString();
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]);
  }

  return sum;
}

console.log(sumOfDigits(123));
console.log(sumOfDigits(907));
