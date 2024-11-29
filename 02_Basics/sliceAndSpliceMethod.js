//  ******slice Method*******
// Purpose: To create a new array that is a shallow 
// copy of a portion of an existing array.
// Syntax: array.slice(begin, end)
// Parameters:
// begin (optional): The index at which to begin extraction. If omitted, extraction starts from the index 0.
// end (optional): The index at which to end extraction (exclusive). If omitted, extraction goes till the end of the array.
// Returns: A new array containing the extracted elements.
// Mutability: Does not modify the original array
const arr = [10,11,12,13,14,15];
const newArray = arr.slice(1,3) 
console.log(newArray);//[11,12]
console.log(arr) //no change

// splice Method
// Purpose: To add or remove elements from an array.
// Syntax: array.splice(start, deleteCount, item1, item2, ...)
// Parameters:
// start: The index at which to start changing the array.
// deleteCount (optional): The number of elements to remove from the array. If 0, no elements are removed.
// item1, item2, ... (optional): The elements to add to the array, starting at the start index.
// Returns: An array containing the deleted elements (if any).
// Mutability: Modifies the original array.


const array = [1, 2, 3, 4, 5];
const removedElements = array.splice(1, 2, 'a', 'b'); // [2, 3]
console.log(array); // [1, 'a', 'b', 4, 5]
console.log(removedElements)
console.log(array.splice(1,2))
console.log(array)