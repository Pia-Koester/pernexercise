const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const pool = require("./db");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const bookRouter = require("./routes/books");
app.use("/books", bookRouter);

app.listen(port, () => {
  console.log(`Example app listening on  http://localhost:${port}`);
});
