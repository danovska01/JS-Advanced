function colorize() {
    let oddRows = document.querySelectorAll('tr:nth-child(odd)');
     // let rowElements = document.querySelectorAll('tr:nth-of-type(2n) td');
    oddRows.forEach(row => {
        row.style.backgroundColor = 'teal';
    });
}


function colorize2() {
    let rowElements = document.getElementsByTagName('tr');

    // Convert to array
    let rows = Array.from(rowElements);

    rows.forEach((x, i) => {
        if (i % 2 != 0) {
            x.style.backgroundColor = 'teal';
        }
    });
}