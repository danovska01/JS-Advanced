
function getDaysInMonth(month, year) {
    // Months are 0-based in JavaScript (0 represents January, 11 represents December).
    // So, we need to subtract 1 from the month parameter.
    // Create a Date object for the 0th day of the next month (i.e., the last day of the given month).
    const lastDayOfMonth = new Date(year, month - 1 + 1, 0);

    // Get the day component (the number of days) of the last day of the month.
    return lastDayOfMonth.getDate();
}


//The output must return the number of days in a month for a given year.
console.log(getDaysInMonth(1, 2012));  // Output: 31 (January 2012 has 31 days)
console.log(getDaysInMonth(2, 2021));  // Output: 28 (February 2021 has 28 days)

