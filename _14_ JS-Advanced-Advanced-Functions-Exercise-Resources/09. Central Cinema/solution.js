function solve() {
    const addNewForm = document.getElementById('add-new');
    const moviesList = document.querySelector('#movies ul');
    const archiveList = document.querySelector('#archive ul');
    const clearButton = document.querySelector('#archive button');
   
    addNewForm.addEventListener('submit', onScreenButtonClick);
    archiveList.addEventListener('click', onArchiveListClick);
    clearButton.addEventListener('click', onClearButtonClick);

    function onScreenButtonClick(event) {
        event.preventDefault();

        const [nameInput, hallInput, priceInput] = addNewForm.querySelectorAll('input');
        const name = nameInput.value;
        const hall = hallInput.value;
        const ticketPrice = parseFloat(priceInput.value);

        if (name && hall && !isNaN(ticketPrice)) {
            const listItem = createMovieListItem(name, hall, ticketPrice);
            moviesList.appendChild(listItem);

            // Clear inputs
            nameInput.value = '';
            hallInput.value = '';
            priceInput.value = '';
        }
    }

    function createMovieListItem(name, hall, ticketPrice) {
        const listItem = document.createElement('li');
        const span = document.createElement('span');
        const strongHall = document.createElement('strong');
        const div = document.createElement('div');
        const strongPrice = document.createElement('strong');
        const ticketsInput = document.createElement('input');
        const archiveButton = document.createElement('button');

        span.textContent = name;
        strongHall.textContent = `Hall: ${hall}`;
        strongPrice.textContent = ticketPrice.toFixed(2);
        ticketsInput.placeholder = 'Tickets Sold';
        archiveButton.textContent = 'Archive';

        archiveButton.addEventListener('click', () => {
            onArchiveButtonClick(name, ticketPrice, ticketsInput.value, listItem);
        });

        div.appendChild(strongPrice);
        div.appendChild(ticketsInput);
        div.appendChild(archiveButton);

        listItem.appendChild(span);
        listItem.appendChild(strongHall);
        listItem.appendChild(div);

        return listItem;
    }

    function onArchiveButtonClick(name, ticketPrice, ticketsSold, listItem) {
        const totalAmount = calculateTotalAmount(ticketPrice, ticketsSold);
        const archiveItem = createArchiveListItem(name, totalAmount);
        archiveList.appendChild(archiveItem);
    
        // Remove the listItem from the moviesList
        listItem.parentNode.removeChild(listItem);
    }
    

    function calculateTotalAmount(ticketPrice, ticketsSold) {
        const tickets = parseInt(ticketsSold) || 0;
        return (ticketPrice * tickets).toFixed(2);
    }

    function createArchiveListItem(name, totalAmount) {
        const listItem = document.createElement('li');
        const span = document.createElement('span');
        const strongAmount = document.createElement('strong');
        const deleteButton = document.createElement('button');

        span.textContent = name;
        strongAmount.textContent = `Total amount: ${totalAmount}`;
        deleteButton.textContent = 'Delete';

        deleteButton.addEventListener('click', () => {
            onDeleteButtonClick(listItem);
        });

        listItem.appendChild(span);
        listItem.appendChild(strongAmount);
        listItem.appendChild(deleteButton);

        return listItem;
    }

    function onDeleteButtonClick(listItem) {
        listItem.remove();
    }

    function onClearButtonClick() {
        console.log('ok is')
        const archiveList = document.querySelector('archieve ul');
        archiveList.innerHTML = '';
    }
}

document.onload = solve();
