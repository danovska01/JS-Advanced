function create(words) {
   const contentElement = document.getElementById('content');

   words.forEach(sectionText => {
       // Create a div element
       const divElement = document.createElement('div');

       // Create a paragraph element
       const paragraphElement = document.createElement('p');
       // Set the text content of the paragraph with the string in it.
       paragraphElement.textContent = sectionText;

       // Initially hide the paragraph
       paragraphElement.style.display = 'none';

       // Add a click event listener to the div
       divElement.addEventListener('click', function () {
           // Toggle the display of the paragraph when the div is clicked
           paragraphElement.style.display = (paragraphElement.style.display === 'none') ? 'block' : 'none';
       });

       // Append the paragraph to the div
       divElement.appendChild(paragraphElement);

       // Append the div to the content element
       contentElement.appendChild(divElement);
   });
}
