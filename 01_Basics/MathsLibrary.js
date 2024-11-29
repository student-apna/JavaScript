// console.log(Math)
// console.log(Math.PI)
// console.log(Math.PI.toPrecision(3))
// console.log(Math.max(4,5,6,7,8)) // array leta hai
// console.log(Math.min(10,12,34,5))// array leta hai
// console.log(Math.abs(-19999))
// console.log(Math.sin(0))
// console.log(Math.round(3.94))
// console.log(Math.round(2.512))
// console.log(Math.ceil(4.001))
// console.log(Math.floor(1.99999999999)) //1
// console.log(Math.log10(0))

// console.log(Math.random())  // value always comes in [0,1]
// console.log((Math.random()*10)+1) // + 1 is for to avoid 0

const min = 10
const max = 20
const num = Math.floor(Math.random()*(max-min+1)+min)
// console.log(num)


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const randomNumber = getRandomInt(10, 20);
  console.log(randomNumber); // Output: A random integer between 10 and 20 (inclusive)
//   console.log(Math.random())
  