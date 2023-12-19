function addItem() {
    // Get the <ul> element by its ID
    let ulElement = document.getElementById('items');
  
    // Get the input element by its ID
    let inputElement = document.getElementById('newItemText');
  
    // Get the value of the input element
    let inputText = inputElement.value;
  
    // Create a new <li> element
    let liElement = document.createElement('li');
  
    // Set the text content of the <li> element
    liElement.textContent = inputText;
  
    // Append the <li> element to the <ul> element
    ulElement.appendChild(liElement);
  
    // Clear the input field after adding the item
    inputElement.value = '';
  }
  