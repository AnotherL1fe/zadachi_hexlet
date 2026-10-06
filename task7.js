function filterEvenNumbers(arr){
    let evenNumbersArr = [];

    let evenNumbers = arr.filter(number => number % 2 === 0);

    const evenNumbersRes = evenNumbers.join()

    evenNumbersArr.push(evenNumbersRes)

    return evenNumbersArr;

}

let numbers = [1, 2, 3, 4, 5]
console.log(filterEvenNumbers(numbers));
