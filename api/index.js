const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const pioneerRoutes = require("./pioneerRoutes"); // Import routes
app.use("/api/pioneers", pioneerRoutes); // Define route prefix

module.exports = app;
