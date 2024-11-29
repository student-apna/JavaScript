const course = {
    coursename:"javaScript",
    price:"9999",
    courseInstructor :"Hitesh sir"
}

// de structuring

const {courseInstructor :Instructor} = course
console.log(Instructor)

// API
// API kuch nhi hai values aati hai backend se
// pehle ke time par values aati thi xml mein 
// ab mostly values are coming in the form of Json

// Api ya to object ke form mein mile
// {
//     "name" : "aftab",
//     "coursename":"js",
//     "price":"free"
// }

// API array ke form mein bhi mil sakti hai
// [
//     {},{},
//     {}
// ]

// json formater tool hai

// famous api hai >=  random user.me