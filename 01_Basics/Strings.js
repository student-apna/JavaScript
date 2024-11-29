// const name = "Aftab Alam";
// const repoCount = 10;
// // concatenate
// // console.log(name+repoCount+"alam");

// // better way
// console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);
// // declaration using constructor
// const str  = new String("aftab alam");
// console.log(str)
// console.log(str.length);
// console.log(str.indexOf('f'));
// console.log(str.charAt(0));
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.substring(0,3));
// const str1 = "   aftabbabb     ";
// console.log(str1);
// console.log(str1.trim());
// const url = "afatabbaba@#cs22@gla.ac.in";
// let str = "Aftab alam";
// for(let i=0; i<str.length; i++){
//     console.log(str[i]);
// }
let StrAmount = "Please give me Rs 1000";
let amount = Number.parseInt(StrAmount.slice("Please give me Rs".length));
console.log(typeof amount)
console.log(amount);
// let balance = new Number(400);
// console.log(balance.toFixed(2));
// const otherNum = 23.98696885;
// console.log(otherNum.toPrecision(3))

// const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-IN')) // indian system ke according , lagata hai