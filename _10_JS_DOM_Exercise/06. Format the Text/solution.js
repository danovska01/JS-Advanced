function solve() {
  let inputelement= document.getElementById("input");
  let inputText = document.getElementById("input").value;
  let sentences = inputText
    .split(".")
    .filter((sentence) => sentence.trim() !== "");

  let outputDiv = document.getElementById("output");
  outputDiv.innerHTML = ""; // Clear previous content

  for (let i = 0; i < sentences.length; i += 3) {
    let paragraphText = sentences.slice(i, i + 3).join(". ");

    paragraphText += ".";

    let paragraph = `<p>${paragraphText}</p>`;
    outputDiv.innerHTML += paragraph;
    inputelement.value= " ";
  }
}
