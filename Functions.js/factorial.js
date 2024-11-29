function factorial(n){
    if(n==0 || n==1){
        return 1;
    }
    return n* factorial(n-1);
}

console.log(factorial(5))//

function factorial(n) {
    if (n < 0) {
      return 'Invalid input'; // Factorial is not defined for negative numbers
    }
    if (n === 0 || n === 1) {
      return 1; // Base case: 0! = 1 and 1! = 1
    }
    return n * factorial(n - 1); // Recursive case
  }
  
 // using arrow function
  const fact = n => {
    if (n < 0) {
      return 'Invalid input'; // Factorial is not defined for negative numbers
    }
    if (n === 0 || n === 1) {
      return 1; // Base case: 0! = 1 and 1! = 1
    }
    return n * fact(n - 1); // Recursive case
  };
  
  console.log(fact(10))