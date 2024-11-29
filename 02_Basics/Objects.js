// if objects is created by constructor so
// it always be a singleton
// but literals se nhi banta sigleton


// objects literals
const mySym = Symbol("Key1");

const jsUser = {
    name : "Aftab",                            // keys are only strings or Symbol
    "full name":"Aftab Alam",
    [mySym ]: "myKey1",
    age : 22,
    location : "tambour",
    isLoggedIn : false,
    lastLoggedDays:["Momday","Sunday"],
    email : "aftab.alam.gla.ac.in"
}
// Object.freeze(jsUser)


// console.log(jsUser.name);  
// console.log(jsUser.email);
// console.log(jsUser["email"]) // second method
// console.log(jsUser["full name"]);
// console.log(typeof mySym); // use as a symbol
// console.log(jsUser[mySym]);

jsUser.greetings = function(){
    console.log("Hello JS User");
}
console.log(jsUser.greetings());
jsUser.greetings2 = function(){
    console.log(`Hello JS user,${this.name}`);
}
console.log(jsUser.greetings2());
