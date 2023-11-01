function solve(num) {
    
    let same = true;
    let numToString = num.toString();
    let firstSymbol = numToString[0];
    let sum = Number(firstSymbol);
    let size = numToString.length;


    for (let i = 1; i < size; i++) {
        if (firstSymbol !== numToString[i]) {
            same = false;
        }
        sum+=Number(numToString[i]);
    }

    console.log(same);
    console.log(sum);

}

solve(2222222);
solve(1234);

