function sumTable() {
    let costElements = document.querySelectorAll('tr td:nth-of-type(2)');
    
    // Use slice to exclude the last element
    let elementsToSum = Array.from(costElements).slice(0, -1);

    let sum = elementsToSum.reduce((a, x) => {
        let currentValue = Number(x.textContent) || 0;
        return a + currentValue;
    }, 0);
  
    let resultElement = document.getElementById('sum');
    resultElement.textContent = sum;
}
