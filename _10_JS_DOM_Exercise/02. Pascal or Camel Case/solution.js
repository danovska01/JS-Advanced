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

function convertToCamelCase(input) {
  return input.split(' ').map((word, index) => index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
}

function convertToPascalCase(input) {
  return input.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
}
