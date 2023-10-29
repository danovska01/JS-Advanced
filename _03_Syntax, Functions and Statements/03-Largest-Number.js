function solve (num1, num2, num3){
    let result;

   if(num1>num2 && num1>num3){
    result=num1;
   }
   if(num2>num1 && num1>num3){
    result=num2;
   }
   if(num3>num2 && num3>num1){
    result=num3;
   }

   console.log('The lasrgest number is ' + result +'.');
}

solve(5, -3, 16);
solve(-3, -5, -22.5);