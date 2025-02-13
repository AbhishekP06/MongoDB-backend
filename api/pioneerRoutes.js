const express = require("express");
const Pioneer = require("../models/Pioneer");

const router = express.Router();

// GET all pioneers
router.get("/", async (req, res) => {
  try {
    const pioneers = await Pioneer.find();
    res.json(pioneers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
