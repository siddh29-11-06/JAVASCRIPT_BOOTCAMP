// 5! = 5*4*3*2*1 = 120
// sum of digit of 120 = 3
// find for 100!

let num = 100n;

function fact()
{
    let f=1n;
    while(num>=1n)
    {
        f = f * num;
        num = num - 1n;
    }
    return f
}

function add()
{
    let a = facto;
    let sum = 0n;
    while(a>=1n)
    {
        b = a%10n;
        a = a/10n;
        sum = sum + b;
    }
    return sum
}

const facto = fact(100);
console.log(`Factorail: ${facto}`);

const addd = add(facto);
console.log(`Add: ${addd}`);

