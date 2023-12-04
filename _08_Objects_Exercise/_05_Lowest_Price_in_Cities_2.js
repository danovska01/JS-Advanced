function lowestPrices(input) {
    let products = {};

    for (const entry of input) {
        let [town, product, price] = entry.split(' | ');
        price = Number(price);

        if (!products.hasOwnProperty(product)) {
            products[product] = { price, town };
        } else {
            if (price < products[product].price || town === products[product].town) {
                products[product] = { price, town };
            }
        }
    }

    for (const product in products) {
        console.log(`${product} -> ${products[product].price} (${products[product].town})`);
    }
}

let input = [
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
];

lowestPrices(input);
