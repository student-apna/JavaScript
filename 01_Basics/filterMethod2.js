

const strings = ['short', 'a bit longer', 'much longer string'];
// filters strings based on their length
const longStrings = strings.filter(str => str.length>10);
console.log(longStrings)

const numbers = [10, 15, 20, 25, 30];

const customFilter = numbers.filter(num => num % 5 === 0 && num > 15);

console.log(customFilter); // [20, 25, 30]
