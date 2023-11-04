function smallestTwo(arr){
    arr.sort((a, b) => a-b);
    arr = arr.splice(0,2);
    console.log(arr.join(' '));
}
smallestTwo([3, 6,3,2,6,4,5,6,3,8,33,65,23,45]);
smallestTwo([30, 15, 50, 5]);
smallestTwo([3, 0, 10, 4, 7, 3]);