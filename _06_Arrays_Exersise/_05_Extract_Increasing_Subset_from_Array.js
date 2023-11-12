//Reduce way
function reduceWay(arr) {
    let biggest = Number.NEGATIVE_INFINITY; // Initialize biggest with a very small value
    let result = arr.reduce((accumulated, current) => {
        if (current >= biggest) {
            biggest = current;
            accumulated.push(current);
        }
        return accumulated;
    }, []);

    return result;
}

//--------------------------------------------

function increasingSequence(arr){
    let biggest = Number.MIN_SAFE_INTEGER;
    const result = arr.filter((el) => {
        if(el >= biggest){
            biggest = el;
            return true;
        }
        return false;
    })
    return result;
}

//-------------------------------------------

// FOREACH WAY
function forEachWay(arr){
    let biggest = Number.MIN_SAFE_INTEGER;
    const result = [];
    arr.forEach((element) => {
    if(element >= biggest){
        result.push(element);
        biggest = element;
    }
});
return result;
}


let arr = [2, 42, 62, 18, 119, 12, 176, 10, 22];
let arr2 = [22, 42, 62, 198, 119, 122, 16, 210, 22];

console.log(reduceWay(arr));
console.log(reduceWay(arr2));

console.log(increasingSequence(arr));
console.log(increasingSequence(arr2));

console.log(forEachWay(arr));
console.log(forEachWay(arr2));
