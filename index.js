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

app.post("/books", async (req, res) => {
  const { title, author, description, category, cover_url, publishedAt } =
    req.body;
  try {
    const result = pool.query(
      "INSERT INTO books(title, author, description, category, cover_url, publishedAt) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *;",
      [title, author, description, category, cover_url, publishedAt]
    );
    res.sendStatus(201);
  } catch (err) {
    console.log(err.message);
    res.sendStatus(500);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on  http://localhost:${port}`);
});
