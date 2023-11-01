//Write a JS function that calculates the date of the previous day by given year, month, and day.

function previousDate(year, month, day){
    
    let date = new Date(`${year}-${month}-${day}`);
    
    date.setDate(date.getDate() - 1);
 // console.log(date);
 
    console.log(date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate());
}




previousDate(2020, 1, 1);
previousDate(2016, 9, 30);
previousDate(2016, 10, 1);