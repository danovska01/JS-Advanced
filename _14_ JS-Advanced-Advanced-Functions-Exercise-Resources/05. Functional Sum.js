function add(num) {
    let sum = num;

    function inner(number) {
        sum += number;
        return inner;
    }

    inner.toString = function() {
        return sum;
    };

    return inner;
}

console.log(add(1)(6)(-3).toString()); // 4
console.log(add(2)(10)(20).toString()); // 32

