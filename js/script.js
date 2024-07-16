//Exercise 1: Array Transformation with map
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]


//Exercise 2: Filtering Arrays with filter
const people = [
  {name: 'Alice', age: 20},
  {name: 'Bob', age: 17},
  {name: 'Jack', age: 29},
  {name: 'Emma', age: 12}
];

const adults = people.filter(person => person.age >= 18);
console.log(adults); // [{name: 'Alice', age: 20}, {name: 'Jack', age: 29}]

//Exercise 3: Reducing Arrays with reduce
const num = [1, 2, 3, 4];
const sum = num.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10


//Exercise 4: Finding Elements with find and findIndex
const fruits = ['apple', 'banana', 'cherry'];
const found = fruits.find(fruit => fruit.includes('a'));
console.log(found); // 'apple'


//Exercise 5: Complex Operations with flatMap
const nestedArray = [[1, 2], [3, 4]];
const flatMapped = nestedArray.flatMap(arr => arr.map(num => num ** 2));
console.log(flatMapped); // [1, 4, 9, 16]


//Mini-Project: Give array to students
const students = [
    {name: 'John', grades: [70, 80, 90]},
    {name: 'Jane', grades: [85, 95, 100]},
    {name: 'Jim', grades: [60, 65, 70]}
  ];
  
  // They need to Calculate average grades, find top performers