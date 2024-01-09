function addItem() {
    const newItemText = document.getElementById('newItemText').value;
    const newItemValue = document.getElementById('newItemValue').value;

    // Create a new option element
    const newOption = document.createElement('option');
    
    // Set textContent and value of the new option
    //the <option> element in HTML has both textContent and value properties.
    newOption.textContent = newItemText;
    newOption.value = newItemValue;

    let menu =  document.getElementById('menu');
    if(newItemText!=='' && newItemValue!==''){
        menu.appendChild(newOption);
    }

    // Clear the input fields
    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}
