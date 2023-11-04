function sumFirstAndLast(arr) {
    if (arr.length < 2) {
        return NaN; // If the array has less than 2 elements, return NaN (Not-a-Number).
    }

    const firstNumber = parseFloat(arr[0]); // Parse the first element to a floating-point number.
    const lastNumber = parseFloat(arr[arr.length - 1]); // Parse the last element to a floating-point number.

    if (isNaN(firstNumber) || isNaN(lastNumber)) {
        return NaN; // If parsing fails, return NaN.
    }

    return firstNumber + lastNumber;
}


const result1 = sumFirstAndLast(['20', '30', '40']);
console.log(result1); // Output: 60

const result2 = sumFirstAndLast(['5', '10']);
console.log(result2); // Output: 15


//============================== way 2 ===============================

function sumEdges(arr){
    //За да подсигурим случая ако масива е само с един елемент
    //ползваме функциите shift и pop, които ще вземат елементи отзад и отпред, 
    // но на копие масив.
    const first = Number([...arr].shift());
    const last = Number([...arr].pop());
    return first + last;
}
console.log(sumEdges(['5', '10']));
console.log(sumEdges(['20', '30', '40']));
