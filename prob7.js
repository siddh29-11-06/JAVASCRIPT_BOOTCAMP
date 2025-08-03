
  let a = 1n; 
  let b = 1n;
  let index = 2; 

  while (String(b).length < 1000) { 
    const temp = b;
    b = a + b;
    a = temp;
    index++;
  }
console.log(`The first Fibonacci number to contain 1000 digits is ${index}`);
