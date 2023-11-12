function rotate(arr, rotations){

    for(let i = 0; i < rotations; i++){
        arr.unshift(arr.pop()); //rotates the array to the right (moves the last element to the front).
    }
    console.log(arr.join(" "));

}

rotate([1, 2, 3, 4, 5], 3);
rotate(['1', '2', '3', '4'], 2);
rotate(['Banana', 'Orange', 'Coconut', 'Apple'], 15);


// arr.push(arr.shift()); //rotates the array to the left (moves the first element to the end).