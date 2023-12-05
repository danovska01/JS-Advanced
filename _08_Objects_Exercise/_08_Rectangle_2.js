function rectangle(width, height, color) {
    // Ensure the first letter of the color is upper case
    const capitalizedColor = color.charAt(0).toUpperCase() + color.slice(1);

    // Define the rectangle object with properties and methods
    const rect = {
        width: width,
        height: height,
        color: capitalizedColor,
        calcArea: function() {
            return this.width * this.height;
        }
    };

    return rect;
}

// Example usage
let rect = rectangle(4, 5, 'red');
console.log(rect.width);    // Output: 4
console.log(rect.height);   // Output: 5
console.log(rect.color);    // Output: Red
console.log(rect.calcArea()); // Output: 20
