const items = [1, 3, 2, 3, 3, 1, 10];

const rta = items.reduce((obj, item) => {
    if(!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});
console.log(rta)

const data = [
    {
      name: "Nicolas",
      level: "low",
    },
    {
      name: "Andrea",
      level: "medium",
    },
    {
      name: "Zulema",
      level: "hight",
    },
    {
      name: "Santiago",
      level: "low",
    },
    {
      name: "Valentina",
      level: "medium",
    },
    {
      name: "Lucia",
      level: "hight",
    },
  ];

  const rtaData = data.map(item => item.level)
  .reduce((obj, item) => {
    if(!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});
console.log(rtaData);

const array = [3, 10, 9, 4, 3, 1, 8, 4, 7, 6];
const resultado = array.reduce((obj, item) => {
  if (item <= 5) {
    obj['1-5']++
  } else if (item <= 8) {
    obj['6-8']++
  } else {
    obj['9-10']++
  }
  return obj
}, {
  '1-5': 0,
  '6-8': 0,
  '9-10': 0
})

console.log(resultado)

const nombresFamiliares = ["Norma", "Maritza", "René", "Guadalupe", "Antonio", "Norma"];
const contarNombres = nombresFamiliares.reduce((contador, nombre) => {
    if(!contador[nombre]) {
        contador[nombre] = 1;
    } else {
        contador[nombre] = contador[nombre] + 1;
    }
    return contador;
}, {});
console.log(contarNombres)
