const pool = require("../db.js");

// BOOK REQUESTS

//GET
//ALL
const getBooks = async (req, res) => {
  const { skip = 0, limit = 100 } = req.query;
  try {
    const { rows } = await pool.query(
      "SELECT * FROM books LIMIT $1 OFFSET $2;",
      [limit, skip]
    );
    res.json(rows);
  } catch (err) {
    console.log(err.message);
    res.sendStatus(500);
  }
};
// Only one Book based on the id
const getSingleBook = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM books WHERE id=$1;", [id]);
    res.json(result.rows[0]);
  } catch (err) {
    console.log(err.message);
    res.sendStatus(500);
  }
};

// //POST
const createBooks = async (req, res) => {
  const { title, author, description, category, cover_url, publishedAt } =
    req.body;
  try {
    // do it again with coalesce so that not all fields must be required
    const result = await pool.query(
      "INSERT INTO books(title, author, description, category, cover_url, publishedAt) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *;",
      [title, author, description, category, cover_url, publishedAt]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.log(err.message);
    res.sendStatus(500);
  }
};

// // DELETE BOOKS

const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "UPDATE books SET is_active = false WHERE id=$1 RETURNING *",
      [id]
    );
    res.send(result.rows[0]);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};

module.exports = { getBooks, createBooks, getSingleBook, deleteBook };
