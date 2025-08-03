const cowsay = require("cowsay");
console.log(cowsay.say({text : "I'm a cow"}));

const appName ="Demo";
const currentDate = 2;
console.log(appName+" "+currentDate);

function greet(name , age)
{
    let message= `Hello, ${name} you are ${age} years old!` ;
    return message;
}

//Function call with a parameter
const greeting = greet("Alice");
console.log(greeting);

let counter = 0;
while(counter<3)
{
    console.log(`Loop Iteration: ${counter}`);
    counter = counter +1;
    counter += 1;
}
console.log("While loop finished. ");

const fruits = ["Apple" , "Banana" , "Cherry"];
for(let i=0; i<fruits.length; i++)
{
    const fruit = fruits[i];
    console.log(`Fruit at Index ${i} is: ${fruit}`);
}