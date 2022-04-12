const numbers = [1, 30, 49, 29, 10, 13];

let rta = undefined;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];

    if(element === 30){
        rta = element;
        break;
    }
    
}
console.log("for", rta);

const rta2 = numbers.find(item => item === 30)
console.log("find", rta2);

const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];

  const rta3 = products.find(item => item.id === '🥞');
  console.log(rta3);
  const rta4 = products.findIndex(item => item.id === '🥞');
  console.log(rta4);

  const winners = [
    {name: "Norma",
    age: 23,
    numberOfPrize: 1,
    },
    {name: "Guadalupe",
    age: 21,
    numberOfPrize: 2,
    },
    {name: "Antonio",
    age: 28,
    numberOfPrize: 3,
    },
  ];

  const answ = winners.find(item => item.numberOfPrize === 1)
  console.log(answ);

  const answF = winners.filter(item => item.numberOfPrize === 1);
  console.log(answF)

  //OUTPUT
 // { name: 'Norma', age: 23, numberOfPrize: 1 }
//[ { name: 'Norma', age: 23, numberOfPrize: 1 } ]