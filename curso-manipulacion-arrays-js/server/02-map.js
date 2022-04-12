const letters = ["N", "o", "r"];
// const newArray = [];

// for (let index = 0; index < letters.length; index++) {
//     const element = letters[index];
//     //Agregando la transformación
//     newArray.push(element + "++");
    
// }


const newArray =letters.map(item => item + "++");

console.log("Original", letters);
console.log("new", newArray);