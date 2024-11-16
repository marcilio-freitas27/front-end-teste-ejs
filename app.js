
require('dotenv').config();
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.render('index');
});

const port = parseInt(process.env.PORT) || 8080;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
