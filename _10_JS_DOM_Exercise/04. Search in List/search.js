function search() {
   let townsElements = document.querySelectorAll("#towns li");
   let inputElement = document.getElementById("searchText");
   let resultElement = document.getElementById("result");
 
   // Clear previous results
   resultElement.textContent = "";
 
   let matches = 0;

   // Retrieve the input value inside the function
   let inputText = inputElement.value.toLowerCase();

   for (town of townsElements) {
     let townText = town.textContent.toLowerCase();
 
     // Remove previous styling
     town.innerHTML = townText;
 
     // Check if the town text contains the input
     if (townText.includes(inputText)) {
       // Create a new span element to make the matched text bold and underlined
       let styledSpan = document.createElement("span");
       styledSpan.style.fontWeight = "bold";
       styledSpan.style.textDecoration = "underline";
       styledSpan.textContent = town.textContent;
 
       // Replace the existing content with the styled text
       town.innerHTML = "";
       town.appendChild(styledSpan);
 
       matches++;
     }
   }
 
   resultElement.textContent = `${matches} match${matches !== 1 ? "es" : ""} found.`;

   // Delayed removal of styling after 3 seconds (adjust as needed)
   setTimeout(() => {
     for (town of townsElements) {
       town.innerHTML = town.textContent;
     }
     resultElement.textContent = "";
     inputElement.value="";
   }, 3000); // 3000 milliseconds (3 seconds)
 }
