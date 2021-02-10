const express = require("express");
const app = express.Router();

app.get("/", async (req, res) => {
  try {
    res.status(200).json({
      statusCode: 200,
      message: "hii",
    });
  } catch (error) {
    res.status(200).json({
      statusCode: 500,
      message: error.message,
    });
  }
});

module.exports = app;
