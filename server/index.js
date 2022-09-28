const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

//middleware
//static files
app.use(express.static(path.join(__dirname, "..", "/public")));
// json body
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello world!')
});

app.listen(3000, () => {
  console.log(`Test app listening on port 3000`)
})