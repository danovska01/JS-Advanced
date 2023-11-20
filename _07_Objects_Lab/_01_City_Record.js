function solve1(name, population, treasury) {
    // First way
    let record = {
        name: name,
        population: population,
        treasury: treasury,
    };

    return record;
} 

function solve2(name, population, treasury) {

    // Second way - dynamic
    let record = {};

    record.name = name;
    record.population = population;
    record.treasury = treasury;

    return record;
} 
function solve3(name, population, treasury) {

    // Third way - shorthand syntax
    let record = { name, population, treasury };

    return record;
} 


console.log(solve1('Tortuga',
7000,
15000
));

console.log(solve2('Santo Domingo',
12000,
23500));