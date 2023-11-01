function solve (x, y){       //x = 100, y = 30

    while( y != 0){
        let t = y;         // t = 30 
        y = x % y;         // y = 100 % 30 = 10
        x = t;              // x = 30


        //2nd iterration  t = 10; y = 30 % 10 = 0; x = 10
        // return 10.


    }
    return x;
}

console.log(solve(100, 30));
console.log(solve(15, 5));
console.log(solve(2154, 458));