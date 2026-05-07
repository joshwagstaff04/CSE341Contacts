require('dotenv').config();
const express = require('express');
const { connectDb } = require('./db/connect');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/contacts', require('./routes/contacts'));

connectDb(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
