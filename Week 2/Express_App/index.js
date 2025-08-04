const express = require('express');
const app = express();

const PORT = 3000;
 
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Middlewares
app.use(express.json())
app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.post('/contact', (req, res) => {
  res.send('Contact Page');
});

// Route Parameters
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

// Query Parameters
app.get('/search', (req, res) => {
  const query = req.query.q;
  res.send(`Search results for: ${query}`);
});
// /search?q=value


// REST API

let users = [
  { id: 1, name: 'Dedan'},
  { id: 2, name: 'Doe'}
];

// CRUD -  Create, Read, Update, Delete

// Create
app.post('/users', (req, res) => {
    const newUser = { id: users.length + 1, name: req.body.name };

    users.push(newUser);
    res.status(201).json(newUser);
})

// Read
app.get('/users', (req, res) => {
  res.json(users);
});
// Read one
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  
  if (!user) {
    return res.status(404).send('User not found');
  }
  
  res.json(user);
});

// Update
app.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));

  if (!user) {
    return res.status(404).send('User not found');
  }

  user.name = req.body.name;
  res.json(user);
});

// Delete
app.delete('/users/:id', (req, res) => {
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));

  if (userIndex === -1) {
    return res.status(404).send('User not found');
  }

  users.splice(userIndex, 1);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log('Server is running on http://localhost:3000');
});