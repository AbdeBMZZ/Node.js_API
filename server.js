const express = require('express');
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/users.js');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = 8000;

try {
  mongoose.connect(
    process.env.MONGODB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(' Mongoose is connected')
  );
} catch (e) {
  console.log('could not connect');
}

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => {
  res.send('hello home page');
});

app.listen(PORT, () =>
  console.log(`Server Running on port: http://localhost:${PORT}`)
);
