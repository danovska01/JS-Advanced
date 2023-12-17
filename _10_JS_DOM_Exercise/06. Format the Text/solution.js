function solve() {
  let inputElement= document.getElementById("input");
  let inputText = inputElement.value;
  let sentences = inputText
    .split(".")
    .filter((sentence) => sentence.trim() !== "");

  let outputElement = document.getElementById("output");
  outputElement.innerHTML = ""; 

  for (let i = 0; i < sentences.length; i += 3) {
    let paragraphText = sentences.slice(i, i + 3).join(". ");

    paragraphText += ".";

    let paragraph = `<p>${paragraphText}</p>`;
    outputElement.innerHTML += paragraph;
    inputElement.value= " ";
  }
}
