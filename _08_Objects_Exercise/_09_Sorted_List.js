function createSortedList() {
    let numbers = [];

    return {
        add: function(element) {
            numbers.push(element);
            numbers.sort((a, b) => a - b);
        },
        remove: function(index) {
            if (index >= 0 && index < numbers.length) {
                numbers.splice(index, 1);
            }
        },
        get: function(index) {
            if (index >= 0 && index < numbers.length) {
                return numbers[index];
            }
        },
        size: function() {
            return numbers.length;
        },
        print: function() {
            console.log(numbers.join(', '));
        }
    };
}

// Example usage
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);

console.log(list.get(1)); // Output: 6

list.remove(1);

console.log(list.get(1)); // Output: 7

list.print();
list.add(90);
list.add(19);
list.add(10);
list.print();

