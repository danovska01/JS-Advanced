
function toggle() {
    let buttonElement = document.getElementsByClassName('button')[0]; // Assuming there's only one element with the class 'button'
    let textElement = document.getElementById('extra');

    if (buttonElement.textContent === 'More') {
        textElement.style.display = 'block';
        buttonElement.textContent = 'Less';
    } else if (buttonElement.textContent === 'Less') {
        textElement.style.display = 'none';
        buttonElement.textContent = 'More';
    }
}
