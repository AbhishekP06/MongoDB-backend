const express = require('express')
const app = express()
const cors = require("cors");
const port = 8080;

app.use(cors({
  origin: "*", // Allow all origins (not recommended for production)
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

require("dotenv").config();
const connectDB = require('./db');
const pioneers = require('./pioneerRoutes')

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

