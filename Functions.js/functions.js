function addTwoNumbers(num1,num2){
    return num1+num2;
}

const res = addTwoNumbers(4,5);
// console.log(res)

function loginUsermesssage(username="aftab"){
    if(!username){
        console.log("Please enter a useraname");
        return;
    }
    return `${username} just logged in`
}

// console.log(loginUsermesssage("usba"))
// console.log(loginUsermesssage())


// jab parameters na pta ho kitne aane wale hai 
// tab hum rest operator ka use krte hai {...}

// EXAMPLE

function calculateCartPrice(...num1){
    return num1;
}
// console.log(calculateCartPrice(100,200,300))

function sumOfArray(arr){
   
    return arr[1];
}

// console.log(sumOfArray([1,2,3,4,5]));

console.log(addOne(5))
function addOne(num){
    return num+1;
}


// if you store a func in a variable 
// then you can not call first 
// console.log(addTwo(5))
//  const addTwo= function (num){
//     return num+2;
// }

