function solve() {
  let inputElement = document.getElementById('text').value;
  let namingConventionElement = document.getElementById('naming-convention').value;
  let resultElement = document.getElementById('result');
  //Unlike form elements like input, textarea, etc., a <span> element 
  //doesn't have a value property. 
  //Instead, we use the textContent property to set or get the
  // text content of the <span>.

  let result = '';

  if (namingConventionElement === 'Camel Case') {
      result = convertToCamelCase(inputElement);
  } else if (namingConventionElement === 'Pascal Case') {
      result = convertToPascalCase(inputElement);
  } else {
      result = 'Error!';
  }

  resultElement.textContent = result;
}
//.map((word, index) => ...): 
//This part applies a transformation to each word in the array. 
//For the first word (index 0), it converts the entire word to lowercase using word.toLowerCase(). 
//For subsequent words, it capitalizes the first letter using word.charAt(0).toUpperCase() 
//and appends the rest of the word in lowercase using word.slice(1).toLowerCase().
//.join(''): Finally, it joins the modified words back into a single string

function convertToCamelCase(input) {
  return input.split(' ').map((word, index) => index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
}

//.map(word => ...): 
//For each word, it capitalizes the first letter using word.charAt(0).toUpperCase() 
//and appends the rest of the word in lowercase using word.slice(1).toLowerCase().

function convertToPascalCase(input) {
  return input.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
}
