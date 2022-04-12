const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ];

  console.log("Array original0", orders);
  const rta = orders.map(item => item.total);
  console.log("rta", rta);

//   const rta2 = orders.map(item => {
//     item.tax = 1.9;
//     return item;
//   });
//   console.log("rta2", rta2);

//Forma correcta de hacerlo
  const rta3 = orders.map((item) => {
      return {
          ...item,
          tax: 0.19
      };
  })
  console.log("rta3", rta3);

  lista = [
      {
    nombre: "María",
    edad: 21,
  },
  {
    nombre: "Anto",
    edad: 27,
  },
  {
    nombre: "Maritza",
    edad: 43,
  },
  {
    nombre: "René",
    edad: 53,
  },
  {
    nombre: "Norma",
    edad: 23,
  },
  ];

  const newList = lista.map((item) => {
    return {
        ...item,
        parentesco: "Familia",
    }
  })
  console.log(lista);
  console.log(newList);

  const names = lista.map(item => item.nombre);
  console.log(names);