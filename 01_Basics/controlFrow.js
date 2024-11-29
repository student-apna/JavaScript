
function oddEven(num){

if(num%2==0){
    console.log("even number")
}
else{
    console.log("odd number");
}
}
oddEven(13);

// falsy values
// false, 0, -0 , BigInt 0n, "", null, undefined,NaN

// truthy values
// "0" , 'false' , " ", [], {},  
//  empty function  -- function(){}

const arr = [];
if(arr.length===0){
    console.log("Array is Empty")
}

const emptyObj = {};
if(Object.keys(emptyObj).length===0){
    console.log("Empty object");
}