const users=[
    {name: 'Alice',age:25},
    {name:'Bob',age:30},
    {name: 'Charlie',age:25}
];

total = users.map(x => x.age).reduce((a,x)=> a+x)
console.log(`Average: ${total/users.length}`)