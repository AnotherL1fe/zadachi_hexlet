function countVowels(str){
    const vowels = ['a','e','i','o','u','y'];
    let count = 0;
    str = str.toLowerCase();

    for(let char of str){
        if (vowels.includes(char)){
            count++;
        }
    }
    return count;
}
console.log(countVowels('HellO'));
