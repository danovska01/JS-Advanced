// Function to replace occurrences of match with replacer in the text content of an element
function editElement(element, match, replacer) {
    // Regex solution
    let pattern = new RegExp(match, "g");
    element.textContent = element.textContent.replace(pattern, replacer);
  }
  
  // Alternative function using while loop
  function editElement2(element, match, replacer) {
    while (element.textContent.includes(match)) {
      element.textContent = element.textContent.replace(match, replacer);
    }
  }
  