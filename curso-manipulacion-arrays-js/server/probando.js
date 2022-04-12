const lista = [
    {
        nombre: "Maritza",
        email: "martiza@gmail.com",
        estado: "casada",
        edad: 43,
        cliente: true,
        gastosMensuales: 300,
    },
    {
        nombre: "Guadalupe",
        email: "guadalupe@gmail.com",
        estado: "soltera",
        edad: 21,
        cliente: false,
        gastosMensuales: 400,
    },
    {
        nombre: "René",
        email: "rene@gmail.com",
        estado: "casado",
        edad: 53,
        cliente: true,
        gastosMensuales: 3000,
    },
    {
        nombre: "Antonio",
        email: "anto@gmail.com",
        estado: "casado",
        edad: 28,
        cliente: false,
        gastosMensuales: 200,
    },
    {
        nombre: "Norma",
        email: "normaescobar@gmail.com",
        estado: "comprometida",
        edad: 150,
        cliente: true,
    },
    {
        nombre: "Heidy",
        email: "hei@gmail.com",
        estado: "casada",
        edad: 23,
        cliente: false,
        gastosMensuales: 100,
    },
];

const esCliente = lista.filter(item => item.cliente);
console.log(esCliente);

const noEscliente = lista.filter(item => !item.cliente)
console.log("No son clientes",noEscliente);

const porNombre = lista.map(item => item.nombre);
console.log("Los nombres son:", porNombre);

const porCorreo = lista.map(item => item.email);
console.log("Por correo",porCorreo)
