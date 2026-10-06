function flattenArray(arr) {
  const result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      for (const subItem of item) {
        result.push(subItem);
      }
    } else {
      result.push(item);
    }
  }
  return result;
}

const input = [[1, 2], [3, [4]]];
console.log(flattenArray(input));
