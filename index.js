require('dotenv/config');
const express = require('express');
const cors = require('cors');
const routes = require('./src/routes');

require('./src/database');

const PORT = 5959;
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
