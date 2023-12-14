function subtract() {
    let firstElement= document.getElementById('firstNumber');
    let secondElement= document.getElementById('secondNumber');
    let result = document.getElementById('result');

    // Extracting the numeric values from the input elements
    let num1 = Number(firstElement.value);
    let num2 = Number(secondElement.value);

    // Performing subtraction and updating the result element
    result.textContent = (num1 - num2).toString();
}