//Write a function that sorts an array of numbers so that the
//first element is the smallest one,
//the second is the biggest one,
//the third is the second smallest one,
//the fourth is the second biggest one, and so on.

function sorter1(arr) {
  let result = [];
  arr = arr.sort((a, b) => a - b);
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      result.push(arr[num]);
      num++;
    } else {
      result.push(arr[arr.length - num]);
    }
  }

  return result;
}

//---------------------------------------
function sorter2(arr) {
  // Sort the array in ascending order
  const sortedArr = arr.slice().sort((a, b) => a - b);

  // Initialize the result array
  const result = [];

  // Interleave the elements from the beginning and end of the sorted array
  for (let i = 0, j = sortedArr.length - 1; i <= j; i++, j--) {
    result.push(sortedArr[i]);
    if (i !== j) {
      result.push(sortedArr[j]);
    }
  }

  return result;
}

// Example usage:
const inputArray = [1, 65, 3, 52, 48, 63, 31, -3, 18, 56];
const sortedArray1 = sorter1(inputArray);
const sortedArray2 = sorter2(inputArray);
console.log(sortedArray1);
console.log(sortedArray2);
