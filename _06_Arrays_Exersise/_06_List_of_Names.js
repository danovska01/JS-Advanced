function order(arr){
   
    arr = arr.sort((a,b)=> a.localeCompare(b));
    
    let orderNumber = 1;

    arr.forEach((element) => {
        console.log(`${orderNumber}.${element}`);
        orderNumber++;
    });


}

order(["John", "Bob", "Christina", "Ema"]);

order(["Hohn", "Yasob", "Boristina", "Ama"]);
