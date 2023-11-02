function solve(n, k){
    let arr = [1];
    for (let i = 1; i < n; i++) {
        let start = Math.max(0, i - k);
        arr[i] = 0;
        for(let y = start; y < i; y++){
            
            arr[i] += arr[y]
        }
    }  
    console.log(arr);
    return arr;   
}
solve(6,3);
solve(8,2);

//The first element is 1
//Every following element equals the sum of the previous k elements
//The length of the sequence is n elements