function printArrayWithDelimiter(arr, delimiter) {
    // Join the array elements with the specified delimiter
    let result = arr.join(delimiter);
    
    // Print the result
    console.log(result);
}

// Example usage:
let arr1 = ['One', 'Two', 'Three', 'Four', 'Five'];
let delimiter1 = '-';
printArrayWithDelimiter(arr1, delimiter1);

let arr2 = ['How about no?', 'I', 'will', 'not', 'do', 'it!'];
let delimiter2 = '_';
printArrayWithDelimiter(arr2, delimiter2);
