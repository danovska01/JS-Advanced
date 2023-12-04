// input: "{heroName} / {heroLevel} / {item1}, {item2}, {item3}..."
function heroicInventory(inputArr) {
    let result = [];

    for (const iterator of inputArr) {
        let [name, level, items] = iterator.split(' / ');
        level = Number(level);

        items = items ? items.split(', ') : [];
        result.push({ name, level, items });
    }

    console.log(JSON.stringify(result));
}

let arr1 = ['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'];

let arr2 = ['Jake / 1000 / Gauss, HolidayGrenade'];

heroicInventory(arr1);
heroicInventory(arr2);
