function doubleOddElementsInReverseOrder1(arr){
    const oddNums = arr.filter((el, i) => i % 2 == 1 );
    const doubled = oddNums.map(x => x * 2);
    doubled.reverse();
    console.log(doubled.join(' '));
}
function doubleOddElementsInReverseOrder2(arr) {
    const result = [];
    for (let i = arr.length - 1; i >= 0; i -= 2) {
        if (i % 2 !== 0) {
            result.push(arr[i] * 2);
        }
    }
    console.log(result.join(' '));
}


doubleOddElementsInReverseOrder1([3, 0, 10, 4, 7, 3]);
doubleOddElementsInReverseOrder2([3, 0, 10, 4, 7, 3]);

doubleOddElementsInReverseOrder1([2, 5, 6, 7, 9, 55, 77, 45]);
doubleOddElementsInReverseOrder2([2, 5, 6, 7, 9, 55, 77, 45]);

doubleOddElementsInReverseOrder1([10, 15, 20, 25]);
doubleOddElementsInReverseOrder2([10, 15, 20, 25]);