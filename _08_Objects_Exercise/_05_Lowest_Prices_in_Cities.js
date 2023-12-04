function solve(arr) {
  let catalogue = {};

  arr.forEach((el) => {
    let [town, product, price] = el.split(" | ");
    price = Number(price);

    if (!catalogue[product]) {
      catalogue[product] = {};
    }

    catalogue[product][town] = price;
  });

  for (const prod in catalogue) {
    const sorted = Object.entries(catalogue[prod]).sort((a, b) => a[1] - b[1]);
    // Sorting by 1-st criteria in the object. They are two. 0 is key, 1 is value.
    // So, sorting by 1 means Sort 1000 in Sample town vs 1000.1 in New York.
    // a[1] - b[1] means taking the smallest - 1000; b[1] - a[1] - the opposite, so - 1000.1

    console.log(`${prod} -> ${sorted[0][1]} (${sorted[0][0]})`);
  }
}

solve([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
