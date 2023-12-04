function storeCatalogue(inputArr) {
    let products = {};

    for (const entry of inputArr) {
        let [name, price] = entry.split(' : ');
        price = Number(price);

        let initial = name[0].toUpperCase();

        if (!products.hasOwnProperty(initial)) {
            products[initial] = [];
        }

        products[initial].push({ name, price });
    }

    let sortedInitials = Object.keys(products).sort();

    for (const initial of sortedInitials) {
        console.log(initial);

        products[initial].sort((a, b) => a.name.localeCompare(b.name)).forEach(product => {
            console.log(`  ${product.name}: ${product.price}`);
        });
    }
}

let input1 = [
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
];

let input2= ['Banana : 2',
'Rubics Cube : 5',
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10'];

storeCatalogue(input1);
storeCatalogue(input2);
