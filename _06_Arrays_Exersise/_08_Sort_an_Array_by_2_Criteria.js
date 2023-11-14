//Write a function that orders a given array of strings,
//by a length in ascending order as primary criteria,
//and by alphabetical value in ascending order as second criteria.

function orderStrings(arr) {
  arr = arr.sort((a, b) => {
    if (a.length > b.length) {
      return 1;
    } else if (a.length < b.length) {
      return -1;
    }

    return a.localeCompare(b);
  });
  return arr.join("\n");
}

//positive (1)=> (b) SORTED BEFORE (a), b smaller to a bigger 
//negative (-1)=> (a) SORTED BEFORE (b), a smaller to b bigger
// if equal... => the localeCompare method
//the localeCompare method is used to compare the strings alphabetically. This method provides a case-insensitive comparison by specifying

// Test cases
let arr1 = ["alpha", "beta", "gamma"];
console.log(orderStrings(arr1));

let arr2 = ["Isacc", "Theodor", "Jack", "Harrison", "George"];
console.log(orderStrings(arr2));

let arr3 = ["test", "Deny", "omen", "Default"];
console.log(orderStrings(arr3));
