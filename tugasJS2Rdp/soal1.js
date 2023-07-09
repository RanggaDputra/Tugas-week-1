const fruits = ['apple', 'banana', 'mango', 'banana'];
console.log(fruits.indexOf('banana')); // Output: 1

const randomNumber = Math.random();
console.log(randomNumber); // Output: (contoh) 0.7243837505885432

const name = 'JOHN DOE';
const lowerCaseName = name.toLowerCase();
console.log(lowerCaseName); // Output: 'john doe'

const name = 'john doe';
const upperCaseName = name.toUpperCase();
console.log(upperCaseName); // Output: 'JOHN DOE'

const fruits = ['apple', 'banana', 'mango'];
const fruitsString = fruits.toString();
console.log(fruitsString); // Output: 'apple,banana,mango'

const fruits = ['apple', 'banana'];
const moreFruits = ['mango', 'orange'];
const allFruits = fruits.concat(moreFruits);
console.log(allFruits); // Output: ['apple', 'banana', 'mango', 'orange']

const fruits = ['apple', 'banana', 'mango'];
console.log(fruits.includes('banana')); // Output: true
console.log(fruits.includes('orange')); // Output: false

const fruits = ['apple', 'banana', 'mango', 'orange'];
const slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // Output: ['banana', 'mango']

const fruits = ['apple', 'banana', 'mango', 'orange'];
const removedFruit = fruits.pop();
console.log(removedFruit); // Output: 'orange'
console.log(fruits); // Output: ['apple', 'banana', 'mango']

const fruits = ['apple', 'banana'];
fruits.push('mango', 'orange');
console.log(fruits); // Output: ['apple', 'banana', 'mango', 'orange']
