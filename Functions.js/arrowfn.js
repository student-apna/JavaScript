// Traditional function expression
const add1 = function(a, b) {
    return a + b;
  };

//   console.log(add1(10,20));
//   console.log(add1(-10,20));
  
  // Arrow function
  const add2 = (a,b) => a+b;

  console.log(add2(20,20))

  // Single expression, implicit return
const square1 = x => x * x;
console.log(square1(20))

// Block body with explicit return
const square = x => {
  return x * x;
};

  