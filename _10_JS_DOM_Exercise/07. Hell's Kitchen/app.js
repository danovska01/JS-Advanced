function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    let inputTextArea = document.querySelector("textarea");
    let restaurantsData = inputTextArea.value
      .split("\n")
      .map((row) => row.trim());

    let restaurants = {};

    restaurantsData.forEach((restaurantData) => {
      let [name, workersData] = restaurantData.split(" - ");
      name = name.replace(/"/g, "");
      name = name.replace(/[\[\]]/g, "");

      // Remove the last two characters from workersData
      workersData = workersData.slice(0, -2);

      // Split workersData into an array of worker strings
      let workersArray = workersData.split(", ").map((worker) => {
        let [workerName, salary] = worker.split(" ");
        return { name: workerName, salary: Number(salary) };
      });

      if (restaurants[name]) {
        // If the restaurant already exists, add new workers
        restaurants[name].workers.push(...workersArray);
      } else {
        // If it's a new restaurant, create an entry
        restaurants[name] = {
          workers: workersArray,
          avgSalary: 0,
          bestSalary: 0,
        };
      }
    });

    let bestRestaurant = findBestRestaurant(restaurants);
    displayOutput(bestRestaurant);
  }

  function findBestRestaurant(restaurants) {
    let bestAvgSalary = 0;
    let bestRestaurantName = "";

    for (let [name, data] of Object.entries(restaurants)) {
      let totalSalary = data.workers.reduce(
        (acc, worker) => acc + worker.salary,
        0
      );
      let avgSalary = totalSalary / data.workers.length;

      if (avgSalary >= bestAvgSalary) {
        bestAvgSalary = avgSalary;
        bestRestaurantName = name;
      }

      let maxSalary = Math.max(...data.workers.map((worker) => worker.salary));
      data.avgSalary = avgSalary;
      data.bestSalary = maxSalary;
    }

    return {
      name: bestRestaurantName,
      avgSalary: bestAvgSalary,
      bestSalary: restaurants[bestRestaurantName].bestSalary,
      workers: restaurants[bestRestaurantName].workers,
    };
  }
  function displayOutput(bestRestaurant) {
    let bestRestaurantElement = document.querySelector("#bestRestaurant p");
    let workersElement = document.querySelector("#workers p");
  
    bestRestaurantElement.textContent = `Name: ${bestRestaurant.name} 
        Average Salary: ${bestRestaurant.avgSalary.toFixed(2)}
        Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;
  
    let workersList = bestRestaurant.workers
      .sort((a, b) => b.salary - a.salary)
      .map((worker) => `Name: ${worker.name} With Salary: ${worker.salary}`)
      .join("\n");
      
    workersElement.textContent = `Name: ${bestRestaurant.name}'s workers\n${workersList}`;
  }
  
}
