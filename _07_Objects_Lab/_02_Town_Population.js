function solve1 (arrOfStrings){

    const towns = {};
    for(let data of arrOfStrings){
        const tokens = data.split(' <-> ');
        const name = tokens[0];
        const population = Number(tokens[1]);

        if(towns[name] == undefined){
            towns[name] = population;
        }else{
            towns[name] += population;
        }
    }
    for(const name in towns){
        console.log(`${name} : ${towns[name]}`);
    }
//Second way, with entries:
//    for(const [name, population] of Object.entries(towns)){
//        console.log(`${name} : ${population}`);
//    }
}

function solve2(arrOfStrings) {
    let towns = {};

    for (const info of arrOfStrings) {

        let infoArr = info.split(' <-> ');
        let town = infoArr[0];
        let population = Number(infoArr[1]);
        //another way
        //let [town, populationText] = info.split(' <-> ');
        //let population = Number(populationText);

        if (!towns[town]) { //Check if the town is already present in the towns object. If not, initialize its population to 0.
            towns[town] = 0;
        }

        towns[town] += population; //Add the current population to the total population of the town.
    }

    for (const town in towns) {
        console.log(`${town} : ${towns[town]}`)
    }
}

solve2(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']);