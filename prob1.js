// CALCULATE SUM OF ALL NUMBERS BETWEEN 1-1000 DIVISIBLE BY 3 OR 5
let sum=0;
let a=1;
while(a<1000)
{ 
    if(a%3==0||a%5==0)
    {
        sum=sum+a;
        
    }
     a=a+1;
}
console.log(sum);