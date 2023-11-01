function solve(input1, input2, input3) {
  let fruit = input1;
  let weightInGrams = Number(input2);
  let pricePerKg = Number(input3);

  let money = (weightInGrams / 1000) * pricePerKg;

  console.log(
    `I need $${money.toFixed(2)} to buy ${(weightInGrams / 1000).toFixed(2)} kilograms ${fruit}.`);
}

solve("orange", 2500, 1.8);
solve("apple", 1563, 2.35);
