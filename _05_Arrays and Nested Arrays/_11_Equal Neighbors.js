//Write a function that finds the number of equal neighbor pairs inside a matrix
function countEquals(matrix) {
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i < matrix.length - 1 && matrix[i][j] === matrix[i + 1][j]) {
        count++;
      }
      if (j < matrix[i].length - 1 && matrix[i][j] === matrix[i][j + 1]) {
        count++;
      }
    }
  }
  return count;
}

const matrix1= [['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']];

const matrix2= [['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']];

console.log(countEquals(matrix1));
console.log(countEquals(matrix2));
