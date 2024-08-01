const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Sync Database
sequelize.sync().then(() => {
  console.log('Database synchronized');
}).catch((err) => {
  console.error('Failed to synchronize database:', err);
});

app.get('/', (req, res) => {
  res.send('Hello, Guvi Zen!');
});

// Define routes here...

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
