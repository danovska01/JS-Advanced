function biggestHalf(arr) {
    let result = arr.sort((a, b) => a - b);
    result = result.splice(result.length/2);   
    return result;
    
}

console.log(biggestHalf([4, 7, 2, 5]));
console.log(biggestHalf([3, 19, 14, 7, 2, 19, 6]));