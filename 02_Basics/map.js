// Q- return only name of students in Capital 
// letters


let students = [
    {name:"Aftab",rollno:31,marks:80},
    {name:"akrit",rollno:9,marks:79},
    {name:"ajmal",rollno:17,marks:98}

]

let names = students.map((st) => st.name.toUpperCase())
console.log(names)

let Myname = [];
for (let index = 0; index < students.length; index++) {
    Myname.push(students[index].name.toUpperCase());
    
}
console.log(Myname)
