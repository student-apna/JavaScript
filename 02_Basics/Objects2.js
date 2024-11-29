// const user = new Object();
// console.log(user); // empty object;

const tinderUser = {};
// console.log(tinderUser.id) undefind
tinderUser.id = 12345;
tinderUser.name = "Aftab";
tinderUser.isLogged = false;
// console.log(tinderUser)





const Obj1 = {1:"one",2:"two"}
const Obj2 = {3:"three",4:"four"}
 // method 1
// const obj3 = Object.assign({},Obj1,Obj2)
// console.log(obj3)


// method 2 spread
const obj3  = {...Obj1,...Obj2}
console.log(obj3)


console.log(tinderUser)
// console.log(Object.keys(tinderUser))  // array type
// console.log(Object.values(tinderUser));