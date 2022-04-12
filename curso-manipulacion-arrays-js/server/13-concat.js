const elements = [1,1,2,2];
const othersElements = [3,3,4,4];

const newArray = [...elements];
for (let index = 0; index < othersElements.length; index++) {
    const element = othersElements[index];
    newArray.push(element);
}

console.log("For", newArray);
//Otra forma
const array = [...elements, ...othersElements];
console.log(array)

const rta = elements.concat(othersElements);
console.log("Concat",rta);

elements.push(...othersElements);
console.log("elements", elements);