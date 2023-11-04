function pie(pies, startPie, endPie){
    let start = pies.indexOf(startPie);
    let end = pies.indexOf(endPie);

    let result = pies.slice(start, end + 1);
    return result;
}
const pies1 = [
    'Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'
];

const pies2 = [
    'Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'
];

console.log(pie(pies1, 'Key Lime Pie', 'Lemon Meringue Pie'));
console.log(pie(pies2, 'Pot Pie', 'Smoked Fish Pie'));