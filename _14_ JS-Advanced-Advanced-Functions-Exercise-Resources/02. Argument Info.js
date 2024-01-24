function advancedFunctions() {
  let data = {};

  Array.from(arguments).forEach((line) => {
    let type = typeof line;
    console.log(`${type}: ${line}`);

    if (!data[type]) {
      data[type] = 0;
    }
    data[type]++;
  });

  Object.keys(data)
    .sort((a, b) => data[b] - data[a])
    .forEach((key) => console.log(`${key} = ${data[key]}`));

// if there is a scope- the curly braces, there should be 'return'
//When using the arrow function syntax with a block of code (inside the sort method in this case), 
//you need to use the return keyword explicitly. 

//   Object.keys(data)
//     .sort((a, b) => {
//         return data[b] - data[a]
//     })
//     .forEach((key) => console.log(`${key} = ${data[key]}`));

}

advancedFunctions("cat", 42, function () {
  console.log("Hello world!");
});
