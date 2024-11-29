
// The filter method in JavaScript is used to create
//  a new array with all elements that pass a test
//   implemented by a provided function.
//    It doesn’t modify the original array but returns 
//    a new one.

const arr = [1,2,3,4,5,6,7,7,8,'12',17];
const evenArr = arr.filter( num=> typeof(num)==='number' &&  num%2===0);
const oddArr = arr.filter(x => x%2!==0);
// console.log(oddArr)
// console.log(evenArr)

// For non-array objects, you'll need different methods
//  or custom implementations:

// Objects: To filter properties or values in objects, 
// you’d generally need to convert them to an array first. 
// For example, using Object.keys(), Object.values(), or Object.entries().



const person = {
  name :"aftab",
  age : 20,
  job: "Developer",
  gender : "Male"
}
// convert objects values to an array and filter
console.log(Object.values(person))
const filterdValues = Object.values(person).filter(value => typeof(value)==='string');
console.log(filterdValues);
const keyArray = Object.keys(person);
console.log(keyArray)





const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const myBook = books.filter(book => book.genre==='Fiction')
// console.log(myBook);
const scienceBooks = books.filter(bk => bk.genre==='Science')
// console.log(scienceBooks)

const recentBooks = books.filter(book => book.publish>1990)
// console.log(recentBooks)
const userBooks1 = books.filter((bk) => {
    return bk.publish>=1975 && bk.genre==='History'
})
// console.log(userBooks1)