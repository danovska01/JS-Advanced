function extractAndConvertToUpperCase(inputString) {
    // Split the input string by any non-word characters (delimiters)
    const words = inputString.split(/\W+/).filter(word => word.length > 0);

    // Check if any words were found
    if (words.length > 0) {
        // Convert the words to uppercase and join them with ", "
        const uppercaseWords = words.map(word => word.toUpperCase()).join(', ');
        console.log(uppercaseWords);
    } else {
        console.log("No words found in the input.");
    }
}

// Example usage:
const input1 = 'Hi, how are you?';
extractAndConvertToUpperCase(input1); // Output: HI, HOW, ARE, YOU

const input2 = 'hello';
extractAndConvertToUpperCase(input2); // Output: HELLO



