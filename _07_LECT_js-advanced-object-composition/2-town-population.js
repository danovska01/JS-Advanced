function solve(input) {
    let towns = {};

    for (const info of input) {
        let infoArr = info.split(' <-> ');
        let town = infoArr[0];
        let population = Number(infoArr[1]);

        if (!towns[town]) { //Check if the town is already present in the towns object. If not, initialize its population to 0.
            towns[town] = 0;
        }

        towns[town] += population; //Add the current population to the total population of the town.
    }

    for (const town in towns) {
        console.log(`${town} : ${towns[town]}`)
    }
}

// function solve(input) {
//     let towns = {};

//     for (const info of input) {
//         let [town, populationText] = info.split(' <-> ');
//         let population = Number(populationText);

//         if (!towns[town]) {
//             towns[town] = 0;
//         }

//         towns[town] += population;
//     }

//     for (const town in towns) {
//         console.log(`${town} : ${towns[town]}`)
//     }
// }
solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']);


