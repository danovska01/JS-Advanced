function heroicInventory(inputArr) {
  const result = [];

  inputArr.forEach((el) => {
    let [name, level, items] = el.split(" / ");
    result.push({
      name,
      level: Number(level),
      items: items ? items.split(", ") : [],
    });
  });
  return JSON.stringify(result);
}

//The output is a JSON representation of the data for all the heroes you’ve stored.

console.log(heroicInventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
  ]));
