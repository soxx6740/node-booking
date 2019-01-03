const app = module.exports = require('express')();

app.get('/', (req, res) => {
  res.send({msg: 'hello! Server is up and running'});
});

app.use('/api/v1/auth', require('./auth'));
app.use('/api/v1/users', require('./users'));
// app.use('/projects', require('./projects'));
app.use('/api/v1/todos', require('./todos'));

// the catch all route
app.all('*', (req, res) => {
  res.status(404).send({msg: 'not found'});
});