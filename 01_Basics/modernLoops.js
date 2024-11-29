// for of  // Array specific loop

// const arr = [1,2,3,4,5,6];
// for (const val of arr) {
//     console.log(val);
// }

// const greetings = "Hello world";

// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)
// }

const map = new Map();

map.set('In',"India");
map.set('usa',"America")
map.set('fr',"france");
map.set('In',"India");  // unique value hi leta hai map
// console.log(map)

// for (const [key,value] of map) {
//     console.log(key,"=>",value);
// }

const myObj = {
    'game1': "NFS",
    'game2': "Hockey"
}

// for (const [key,value] of myObj) {    not iterable
//     console.log(key,value)
// }


const arr = [1, 2, 3, 4, 5, 6];
for (const [index, value] of arr.entries()) {
    console.log(`${index}: ${value}`);
}
