const prompt = require('prompt-sync')();

const sizeOfPie = prompt('What size pie you looking for?');

let totalCost = 0;

switch(sizeOfPie) {
    
    case xl:
        totalCost = totalCost + 8;
        break;
    
}
console.log(totalCost)