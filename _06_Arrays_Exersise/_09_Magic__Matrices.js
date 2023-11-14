//A matrix is magical if the sums of the cells of every row and every column are equal.

function magicMatrice(arr) {
  let sum = arr[0].reduce((a, b) => a + b);

  for (let i = 0; i < arr[0].length; i++) {
    let colSum = 0;

    for (let j = 0; j < arr.length; j++) {
      colSum += arr[j][i];
    }
    if (colSum != sum) {
      return false;
    }
  }

  return true;
}
let arr1 = [
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
];

let arr2 = [
  [11, 32, 45],
  [21, 0, 1],
  [21, 1, 1],
];

let arr3 = [
  [1, 0, 0],
  [0, 0, 1],
  [0, 1, 0],
];

console.log(magicMatrice(arr1));
console.log(magicMatrice(arr2));
console.log(magicMatrice(arr3));
