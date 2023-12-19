function addItem() {
    let itemsElement = document.getElementById('items');
    let inputElement = document.getElementById('newItemText');
    let inputText = inputElement.value;
  
    let liElement = document.createElement('li');
    liElement.textContent = inputText;
  
    let delElement = document.createElement('a');
    delElement.textContent = '[Delete]';
    delElement.addEventListener('click', function () {
      // Remove the parent li when the delete link is clicked
      itemsElement.removeChild(liElement);
    });
  
    liElement.appendChild(delElement);
    itemsElement.appendChild(liElement);
  
    inputElement.value = '';
  }
  