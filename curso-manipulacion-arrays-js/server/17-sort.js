const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a, b) => a - b);
console.log(numbers)
const words = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair', 'banana'];
// words.sort((a, b) => a.localeCompare(b));
words.sort();
console.log(words)
const orders = [
    {
      customerName: "Nicolas",
      total: 600,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 1840,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ];

  orders.sort((a, b) => b.total - a.total);
  console.log(orders)

  const array = [['🐸','🐱'],'🐹', ['🐯']]; 
const rta = array.flat();
console.log(rta)

const array1 = ['a', 'bb', 'ccc']; 
const rta1 = array1.map(item => item.length);
console.log(rta1)