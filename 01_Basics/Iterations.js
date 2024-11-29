// for()

const arr = [1,2,3,4,5];
let sum=0;
for(let i=0; i<arr.length; i++){
    sum+=arr[i];
}
console.log(sum);


// const sum1 = arr.reduce((acc, curr) => acc + curr, 0);
const sum1 = arr.reduce((acc,curr) => acc+curr,0);
console.log(sum1)


// finding the max value in a array
const numbers = [1, 3, 2, 8, 4,19,17];
const max = Math.max(...numbers);
console.log(max); // Output: 8
console.log(Math.min(...numbers)) // 1


// let index = 1;
// while (index<=10) {
//     console.log(index);
//     index+=2;
    
// }
// let score =1;

// do {
//     console.log(`Score is ${score}`);
//     score++;
    
// } while (score<=10);