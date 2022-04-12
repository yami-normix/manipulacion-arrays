const totals = [1, 2, 3, 4];

let sum = 0;
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum = sum + element;
    
}
console.log(sum);

//Reduce
const rta = totals.reduce((sum, element) => sum + element, 0);
console.log("rta",rta);

const rta2 = totals.reduce((mult, item) => mult * item, 1)
console.log(rta2);