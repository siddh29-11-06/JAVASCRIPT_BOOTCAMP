//SUM OF DIGITS OF 2^1000

function sumOfDigitsOfTwoPowerN(n) 
{
      const bigNumber = 2n ** BigInt(n);

      const numberString= bigNumber.toString();
      let sum=0
      for(let i=0;i<numberString.length;i++)
      {
        sum += parseInt(numberString[i])
      }
      return sum;
}
const sum = sumOfDigitsOfTwoPowerN(1000);
console.log(`The sum of the digits of 2^1000 is: ${sum}`);

//Array Reduce Method
console.log((BigInt(2)**BigInt(1000)).toString().split('').map(Number).reduce((a,x)=>a+x))