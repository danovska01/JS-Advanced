function func(arr, step){
   const result = [];
    for(let i = 0; i < arr.length; i += step){
        result.push(arr[i]); 
    }
    return result;
}


/// second way

function func2(arr, step){
    return arr.filter((element, index) => index % step == 0);

}