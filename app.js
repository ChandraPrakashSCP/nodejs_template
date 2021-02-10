const express = require("express");
const app = express();
const port = 3000;

const indexRouter = require("./routes");

app.use("/", indexRouter);

app.get("*", (req, res) => {
  res.json({
    msg: "404 page not found",
    status: 404,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
