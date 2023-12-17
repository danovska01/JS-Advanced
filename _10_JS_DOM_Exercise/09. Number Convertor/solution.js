// Add your JavaScript code here
document.getElementById('convertButton').addEventListener('click', convertNumber);

function convertNumber() {
    const fromValue = document.getElementById('selectMenuFrom').value;
    const toValue = document.getElementById('selectMenuTo').value;
    const inputNumber = document.getElementById('input').value;

    if (!inputNumber || isNaN(inputNumber)) {
        alert('Please enter a valid number.');
        return;
    }

    let result;
    if (fromValue === 'decimal') {
        if (toValue === 'binary') {
            result = decimalToBinary(inputNumber);
        } else if (toValue === 'hexadecimal') {
            result = decimalToHexadecimal(inputNumber);
        }
    }

    document.getElementById('result').value = result;
}

function decimalToBinary(decimalNumber) {
    return (decimalNumber >>> 0).toString(2);
}

function decimalToHexadecimal(decimalNumber) {
    return (decimalNumber >>> 0).toString(16).toUpperCase();
}
