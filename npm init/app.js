const express = require ("express");
const app = express();
const port = 3000;

app.use(express.json());


app.get('/',(req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
  

const users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' }
];

// Then add another route like this
app.get('/api/users', (req, res) => {
  console.log('GET users was called!');
  res.json(users);
});

app.get('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
        if (user) {res.json(user);}
    else {
        res.status(404).send('User not found.')
    }
});

app.post('/api/users',(req,res) => {
    const newUser = req.body;
    console.log('nu='+newUser);
    const newId = users.length>0? Math.max(...users.map(u=>u.id))+1:1;
    const userToAdd = {id: newId, ...newUser};
    users.push(userToAdd);
    console.log(userToAdd)
    res.status(201).json(userToAdd);
});