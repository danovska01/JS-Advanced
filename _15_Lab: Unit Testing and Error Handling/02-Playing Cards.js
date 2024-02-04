function createCard(face, suit) {
    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validSuits = ['S', 'H', 'D', 'C'];

    if (!validFaces.includes(face) || !validSuits.includes(suit)) {
        throw new Error('Invalid face or suit for the card');
    }

    const card = {
        face: face,
        suit: suit,
        toString: function () {
            const suitsSymbols = {
                'S': '\u2660', // Spades
                'H': '\u2665', // Hearts
                'D': '\u2666', // Diamonds
                'C': '\u2663', // Clubs
            };

            return `${face}${suitsSymbols[suit]}`;
        }
    };

    return card;
}

// Examples
try {
    const card1 = createCard('A', 'S');
    console.log(card1.toString()); // Output: A♠

    const card2 = createCard('10', 'H');
    console.log(card2.toString()); // Output: 10♥

    // This will throw an error
    const invalidCard = createCard('1', 'C');
} catch (error) {
    console.error(error.message); // Output: Invalid face or suit for the card
}
