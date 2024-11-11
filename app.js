require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const indexRoute = require('./routes/index');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/', indexRoute);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
