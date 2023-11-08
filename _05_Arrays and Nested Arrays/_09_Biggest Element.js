function findBiggest(matrix) {
  let bigest = Number.MIN_SAFE_INTEGER;
  for (let num of matrix) {
    let localBigest = Math.max(...num);
    bigest = Math.max(bigest, localBigest);
  }

  return bigest;
}

function findBiggestElement(matrix) {
  let biggestElement = matrix[0][0];

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] > biggestElement) {
        biggestElement = matrix[row][col];
      }
    }
  }

  return biggestElement;
}

// Example usage:
const matrix = [
  [3, 5, 7],
  [1, 9, 2],
  [8, 4, 6],
];

const matrix1 = [
  [20, 50, 10],
  [8, 33, 145],
];

const matrix2 = [
  [3, 5, 7, 12],
  [-1, 4, 33, 2],
  [8, 3, 0, 4],
];

const result = findBiggestElement(matrix);
const result1 = findBiggest(matrix);
console.log(result);
console.log(result1);
