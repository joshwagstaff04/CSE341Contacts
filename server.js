require('dotenv').config();
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const { connectDb } = require('./db/connect');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/contacts', require('./routes/contacts'));

connectDb(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
