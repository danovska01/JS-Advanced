function extractText() {
   
    const list = document.getElementById('items');
    const textarea = document.getElementById('result');

    // Check if the list and textarea exist
    if (list && textarea) {
        // Collect text content of each list item
        const listItems = list.getElementsByTagName('li');
        const collectedText = [];

        for (let i = 0; i < listItems.length; i++) {
            collectedText.push(listItems[i].textContent.trim());
        }

        // Update the textarea with the collected text
        textarea.value = collectedText.join('\n');
    } else {
        console.error('List or textarea not found.');
    }
}

function extractText2() {
    let ulElement = document.getElementById('items');

    let textareaElement = document.getElementById('result');
    textareaElement.textContent = ulElement.textContent;
}
