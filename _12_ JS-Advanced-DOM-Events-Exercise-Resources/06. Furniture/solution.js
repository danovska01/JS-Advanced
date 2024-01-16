function solve() {
  const generateButton = document.querySelectorAll('button')[0];
  const buyButton = document.querySelectorAll('button')[1];
  const textarea = document.querySelectorAll('textarea')[0];
  const resultTextarea = document.querySelectorAll('textarea')[1];

  generateButton.addEventListener('click', generateFurniture);
  buyButton.addEventListener('click', buyFurniture);

  function generateFurniture() {
      const furnitureData = JSON.parse(textarea.value);

      furnitureData.forEach(furniture => {
          const table = document.querySelector('.table tbody');
          const row = table.insertRow();

          const imgCell = row.insertCell(0);
          const nameCell = row.insertCell(1);
          const priceCell = row.insertCell(2);
          const decFactorCell = row.insertCell(3);
          const markCell = row.insertCell(4);

          const img = document.createElement('img');
          img.src = furniture.img;
          imgCell.appendChild(img);

          const nameParagraph = document.createElement('p');
          nameParagraph.textContent=furniture.name;
          nameCell.appendChild(nameParagraph);
         
          const priceParagraph = document.createElement('p');
          priceParagraph.textContent = furniture.price;
          priceCell.appendChild(priceParagraph);

          const decFactorParagraph = document.createElement('p');
          decFactorParagraph.textContent = furniture.decFactor;
          decFactorCell.appendChild(decFactorParagraph);

          const checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
          markCell.appendChild(checkbox);
      });
      const checkboxes = document.querySelectorAll('.table tbody input[type="checkbox"]');

      checkboxes.forEach(checkbox => {
        checkbox.disabled = false;
      });
  }

  function buyFurniture() {
    const checkboxes = document.querySelectorAll('.table tbody input[type="checkbox"]:checked');

      const boughtFurniture = Array.from(checkboxes).map(checkbox => {
          const row = checkbox.closest('tr');
          const name = row.cells[1].textContent.trim();
          const price = parseFloat(row.cells[2].textContent);
          const decFactor = parseFloat(row.cells[3].textContent);
          return { name, price, decFactor };
      });

      const totalPrice = boughtFurniture.reduce((sum, furniture) => sum + furniture.price, 0).toFixed(2);
      const avgDecFactor = (boughtFurniture.reduce((sum, furniture) => sum + furniture.decFactor, 0) / boughtFurniture.length).toFixed(2);

      const resultText = `Bought furniture: ${boughtFurniture.map(furniture => furniture.name).join(', ')}\nTotal price: ${totalPrice}\nAverage decoration factor: ${avgDecFactor}`;
      resultTextarea.value = resultText;
  }
}
