// 1. Flatten the Array
// You can use the flat() method to flatten the array, which is available 
// in modern JavaScript environments. It removes nested arrays.

const numbers = [1,3,2,8,4,[17,19]];
const flattened = numbers.flat();
console.log(flattened); // Output: [1, 3, 2, 8, 4, 17, 19]


console.log(Math.max(...numbers.flat()))  // ans - 19
// Using flat() with Depth
// The flat() method can take a depth argument to specify how deep the flattening should go.
//  For example:
const numbers1 = [1, 3, 2, 8, 4, [17, 19],[[12,34],56]];
const flatArr = numbers1.flat(2);
console.log(flatArr)
