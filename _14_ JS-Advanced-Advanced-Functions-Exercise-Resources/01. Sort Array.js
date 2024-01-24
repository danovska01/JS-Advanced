function sortArray(arr, order) {
    if (order === 'asc') {
        // Sort in ascending order
        return arr.sort((a, b) => a - b);
    } else if (order === 'desc') {
        // Sort in descending order
        return arr.sort((a, b) => b - a);
    } else {
        // Handle invalid order argument
        console.error('Invalid order argument. Please use "asc" or "desc".');
        return arr;
    }
}


const ascendingResult = sortArray([14, 7, 17, 6, 8], 'asc');
console.log(ascendingResult); // Output: [6, 7, 8, 14, 17]

const descendingResult = sortArray([14, 7, 17, 6, 8], 'desc');
console.log(descendingResult); // Output: [17, 14, 8, 7, 6]
