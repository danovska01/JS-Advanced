function evenPosition(strings) {
    let result = '';
    for (let i = 0; i < strings.length; i++) {
        if (i % 2 == 0) {
            result += strings[i];
            result += ' ';
        }
    }
    console.log(result);

}

evenPosition(['20', '30', '40', '50', '60']);
evenPosition(['5', '10']);