function fromJSONToHTMLTable(input) {
  const data = JSON.parse(input);
  const keys = Object.keys(data[0]);
 

  let tableHTML = "<table>\n";
  tableHTML +=
    "   <tr>" + keys.map((key) => `<th>${key}</th>`).join("") + "</tr>\n";
  

  for (const entry of data) {
    tableHTML +=
      "   <tr>" +
      keys.map((key) => `<td>${escapeHtml(entry[key])}</td>`).join("") +
      "</tr>\n";
  }

  tableHTML += "</table>";
  return tableHTML;
}

function escapeHtml(unsafe) {
  return unsafe
    .toString()
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// console.log(
//   fromJSONToHTMLTable(
//     `[
// {"Name":"Pesho",
// "Score":4,
// " Grade":8},
// {"Name":"Gosho",
// "Score":5,
// " Grade":8},
// {"Name":"Angel",
// "Score":5.50,
// " Grade":10}
// ]`
//   )
// );

// console.log(
//   fromJSONToHTMLTable(
//     `[
//     {"Name":"Stamat",
//     "Score":5.5},
//    {"Name":"Rumen",
//     "Score":6}
//   ]`
//   )
// );

console.log(
  fromJSONToHTMLTable(
    `[
        {"Name":"Stamat",
        "Score":5.5,
        "Score2":5.5},
        {"Name":"Stamat",
        "Score":5.5,
        "Score2":5.5},
       {"Name":"Rumen",
        "Score":6,
        "Score2":5.5}
      ]`
  )
);
