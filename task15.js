function repeatString(str, count) {
  if (count <= 0) return '';
  
  let result = '';
  for (let i = 0; i < count; i++) {
    result += str;
  }
  return result;
}   

console.log(repeatString('ab', 3));
console.log(repeatString('x', 5));
console.log(repeatString('hi', 0));
