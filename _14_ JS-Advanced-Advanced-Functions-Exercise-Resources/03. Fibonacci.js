//Write a JS function that when called, returns the next Fibonacci number, 
//starting at 0, 1. Use a closure to keep the current number.

function getFibonator(){
    let [a,b] = [0,1];
    //0, 1, 1, 2, 3, 5, 8

    return ()=>{
        let c= a+b; 
        a=b;
        b=c;
        return a;
    }
}

let fib = getFibonator();
console.log(fib());//1
console.log(fib());//1
console.log(fib());//2
console.log(fib());//3
console.log(fib());//5
console.log(fib());//8

