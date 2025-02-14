const express = require('express')
const app = express()
const port = 3000
require("dotenv").config();
const connectDB = require('./db');
const pioneers = require('./routes/pioneerRoutes')

//body parser
app.use(express.json());
connectDB();

app.use('/api', pioneers)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})