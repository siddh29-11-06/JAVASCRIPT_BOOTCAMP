
const numbers = [];
for (let i = 1; i <= 100; i++) {
  numbers.push(i);
}

const tripledNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  tripledNumbers.push(numbers[i] * 3);
}

console.log("Numbers divisible by 5 after tripling:");
let sumOfDivisibleByFive = 0;
for (let i = 0; i < tripledNumbers.length; i++) 
    {
  if (tripledNumbers[i] % 5 == 0) 
    {
    console.log(tripledNumbers[i]);
    sumOfDivisibleByFive += tripledNumbers[i];
  }
}
console.log("Sum of numbers divisible by 5:", sumOfDivisibleByFive)



let num= []
for(let i=0;i<=100;i++)
{
    num.push(i)
}
console.log(num.map(x => x*3).filter(x => x%5==0). reduce((a,x)=>a+x))