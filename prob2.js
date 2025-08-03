//Fibonacci series 4,000,000

let a=0;
let b=1;
let nextTerm=a+b;
let result=0;
while(a<4000000)
{
    if(nextTerm%2==0)
    {
      result=result+nextTerm;
    }
    nextTerm= a+b;
    a=b;
    b=nextTerm;
}
console.log(result)