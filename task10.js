function uniqueValues(arr) {
  const seen = new Set();
  const result = [];

  for (const item of arr) {
    if (!seen.has(item)) {
      seen.add(item);
      result.push(item);
    }
  }

  return result;
}

const input = [1, 2, 2, 3, 1];
console.log(uniqueValues(input));
