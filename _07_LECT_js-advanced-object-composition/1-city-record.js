function solve(name, population, treasury) {
    // First way
    let record = {
        name: name,
        population: population,
        treasury: treasury,
    };

    // Second way - dynamic
    // let record = {};

    // record.name = name;
    // record.population = population;
    // record.treasury = treasury;

    // Third way - shorthand syntax
    // let record = { name, population, treasury };

    return record;
} 

solve('Tortuga',
7000,
15000
);

console.log(solve('Tortuga',
7000,
15000
));
console.log(solve('Lisbon',
7000,
18000
));