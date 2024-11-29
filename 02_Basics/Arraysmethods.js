//1. Array.prototype.toString()
// The toString() method returns a string representing the elements of the array.

let fruits = ["Banana", "Orange", "Apple", "Mango"];
let result = fruits.toString(); 
// console.log(result); // Outputs: "Banana,Orange,Apple,Mango"
// console.log(typeof result) // string


// The Array.of() method creates a new array instance with a variable number of elements,
//  regardless of the number or type of the arguments.

let arr1 = Array.of(7,8,9); 
// console.log(arr1); // Outputs: [7,8,9]

let arr2 = Array.of(1, 2, 3); 
// console.log(arr2); // Outputs: [1, 2, 3]

// the Array.from() method creates a new array 
// instance from an array-like or iterable object


let str = "Hello";
let arr = Array.from(str); 
// console.log(arr); // Outputs: ["H", "e", "l", "l", "o"]

//Example 2: From a Set
let set = new Set(["foo", "bar", "baz"]);
let setArray = Array.from(set); 
// console.log(setArray); // Outputs: ["foo", "bar", "baz"]



//Example 3: From a Map

let map = new Map([[1, 'one'], [2, 'two'], [3, 'three']]);
let mapArray = Array.from(map);
// console.log(mapArray); // Outputs: [[1, 'one'], [2, 'two'], [3, 'three']]


//Using a Map Function
let numbers = [11,22,33,44,55];
let doubled = numbers.map(x => x*3)
console.log(doubled)
let mod10 = Array.from(numbers,x => x%10);
// console.log(mod10)

