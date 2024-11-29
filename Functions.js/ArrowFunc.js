// this keyword is refer to the current context

const user = {
    username : "aftab",
    price : 999,
    welecomeMessage : function(){
        console.log(`${this.username},welcome to website`)
        console.log(this)
    }

}
// user.welecomeMessage()
// user.username = "hitesh";
// user.welecomeMessage();

console.log(this) // {} empty object  // node environment

// ****Note(imp)******
// console.log(this) // browser mein iska output Window 
// aata hai because in browser global object is Window