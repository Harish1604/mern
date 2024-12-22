const express = require("express");
const router = express.Router();
const rootDir = require('../utils/path');
const path = require('path')

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir,'views','add-product.html'));
});

router.post("/add-product", (req, res, next) => {
  console.log("Form data:", req.body);
  res.send("<h1>Product submitted</h1>");
});


module.exports = router;