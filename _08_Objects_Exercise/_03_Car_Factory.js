function createNewCarObj(carObj){
    const result = {};
    
    function getEngine(power){
        if(power <= 90){
            return { power: 90, volume: 1800 };
        }else if(power <= 120){
            return { power: 120, volume: 2400 };
        }else{
            return { power: 200, volume: 3500 };
        }
    }
        const properWheelSize = carObj.wheelsize % 2 === 0 ? carObj.wheelsize - 1 : carObj.wheelsize; 
    
        result.model = carObj.model;
        result.engine = getEngine(carObj.power);
        result.carriage = {type: carObj.carriage, color: carObj.color};
        // Fill array: [properWheelSize, properWheelSize, properWheelSize, properWheelSize];
        result.wheels = new Array(4).fill(properWheelSize, 0, 4);
    
    return result;
    
    }   
    
    
    
    
    console.log(createNewCarObj({ model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 }
    ));

    console.log(createNewCarObj({ model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17 }
    ));