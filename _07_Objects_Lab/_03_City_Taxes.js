function cityTaxes(name, population, treasury){
    const result = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes(){ //Increase treasury by  population * taxRate
            this.treasury += Math.floor(this.population * this.taxRate);
        },
        applyGrowth(percent){//Increase population by given percentage
            this.population += Math.floor(this.population * (percent / 100));
        },
        applyRecession(percent){//Decrease treasury by given percentage
                this.treasury -= Math.ceil(this.treasury * (percent / 100));
        }
    };
    return result;
}

console.log(cityTaxes('Tortuga',
7000,
15000));


const city =
  cityTaxes('Tortuga2',
  7000,
  15000);
  
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);

