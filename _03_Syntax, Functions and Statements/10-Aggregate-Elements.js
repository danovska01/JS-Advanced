function arrayOperations(arr) {
    // Sum(ai) - calculates the sum of all elements from the input array
    let sum = arr.reduce((acc, current) => acc + current, 0);
    console.log(sum);

    // Sum(1/ai) - calculates the sum of the inverse values (1/ai) of all elements from the array
    let inverseSum = arr.reduce((acc, current) => acc + 1 / current, 0);
    console.log(inverseSum);

    // Concat(ai) - concatenates the string representations of all elements from the array
    let concatString = arr.join('');
    console.log(concatString);
}

// Test cases
arrayOperations([1, 2, 3]);
arrayOperations([2, 4, 8, 16]);
