function generateReport() {
    let tableHeaders = document.querySelectorAll('thead th input[type="checkbox"]:checked');
    let tableRows = document.querySelectorAll('tbody tr');
    let reportData = [];
  
    tableRows.forEach(row => {
      let rowData = {};
  
      tableHeaders.forEach(checkbox => {
        let columnName = checkbox.getAttribute('name');
        let cellValue = row.querySelector(`td:nth-child(${getIndex(checkbox)})`).textContent.trim();
  
        rowData[columnName] = cellValue;
      });
  
      reportData.push(rowData);
    });
  
    document.getElementById('output').value = JSON.stringify(reportData, null, 2);
  }
  
  function getIndex(checkbox) {
    let index = 1;
    let currentElement = checkbox;
  
    while (currentElement = currentElement.previousElementSibling) {
      index++;
    }
  
    return index;
  }
  