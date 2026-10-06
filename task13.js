function generateMultiplicationTable(n) {
  for (let i = 1; i <= 10; i++) {
    const result = n * i;
    console.log(`${n} * ${i} = ${result}`);
  }
}

generateMultiplicationTable(7);