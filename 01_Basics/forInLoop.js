const myObject = {
    js : "JavaScript",
    py : "Python",
    cpp : "C++",
    rb  : "Ruby",
    swift : "Swift by apple"
}

// for in loop keys print krta hai
// arrays mein for in index print krta hai

for(const key in myObject){
    console.log(myObject[key])
}

const arr = [1,2,3,4,5,6];
for(const i in arr){
    console.log(`key:${i} and value: ${arr[i]}`);
   
}

// arr.forEach()