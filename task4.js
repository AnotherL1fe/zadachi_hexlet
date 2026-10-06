function truncateText(str, maxLength){
    return str.slice(0,maxLength) + "...";
}

console.log(truncateText("Очень длинная строка", 10));
