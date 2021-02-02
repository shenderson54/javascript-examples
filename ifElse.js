
const prompt = require('prompt-sync')();

let totalCost = 0;

let sizeOfPie = prompt('What size pie you looking for? ');
if(sizeOfPie === 'xl'){
    totalCost = totalCost + 8;
}
else if(sizeOfPie === 'l'){
    totalCost = totalCost + 7;
}
else if(sizeOfPie === 'm'){
    totalCost = totalCost + 6;
}
else if(sizeOfPie === 's'){
    totalCost = totalCost +5
}
console.log(totalCost)
let cheeseAmount = prompt('Would you like some extra cheese ');

if (cheeseAmount === 'yes') {
    totalCost = totalCost +1;
}

let toppings = prompt('What would you like on your 1 topping pizza pie? ');

if(toppings === 'pepperoni'){
    totalCost = totalCost + 1.49;
}
else if( toppings === 'mushrooms'){
    totalCost = totalCost + 1.29;
}
else if( toppings === 'sausage'){
    totalCost = totalCost + 1.99;
}
else if( toppings === 'greenPeppers'){
    totalCost = totalCost +1.39;
}
console.log(totalCost)

