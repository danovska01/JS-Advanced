function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    tableElements = document.querySelectorAll("tbody tr td");
    let inputElement = document.getElementById("searchField");

    let inputText = inputElement.value.trim().toLowerCase();

    // Clear previous results
    for (element of tableElements) {
      let rowElement = element.parentElement;
      rowElement.classList.remove("select");
    }

    // Perform the new search
    for (element of tableElements) {
      let elementText = element.textContent.trim().toLowerCase();
      if (elementText.includes(inputText) && inputText !== "") {
        let rowElement = element.parentElement;
        rowElement.classList.add("select");
      }
    }

    // Clear the input field after the search
    inputElement.value = "";

    // Timeset for removal of yellow collor:
    //  setTimeout(() => {
    //    for (element of tableElements) {
    //      element.parentElement.classList.remove("select");
    //    }
    //  }, 2000);
  }
}
