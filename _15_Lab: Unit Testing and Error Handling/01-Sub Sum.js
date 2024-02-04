function subSum(arr, startIndex, endIndex) {
    // Check if the first parameter is an array
    if (!Array.isArray(arr)) {
        return NaN;
    }

    // Check if the start index is less than zero
    if (startIndex < 0) {
        startIndex = 0;
    }

    // Check if the end index is outside the bounds of the array
    if (endIndex >= arr.length) {
        endIndex = arr.length - 1;
    }

    // Sum the elements from startIndex to endIndex
    let sum = 0;
    for (let i = startIndex; i <= endIndex; i++) {
        // Cast the array element to a number (if possible)
        let currentElement = Number(arr[i]);
        // Check if the casted element is NaN, and skip it
        if (!isNaN(currentElement)) {
            sum += currentElement;
        }
    }

    return sum;
}

// Examples
console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300)); // Output: 150
console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1)); // Output: 3.3
console.log(subSum([10, 'twenty', 30, 40], 0, 2)); // Output: NaN
console.log(subSum([], 1, 2)); // Output: 0
console.log(subSum('text', 0, 2)); // Output: NaN
