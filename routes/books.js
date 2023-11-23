const express = require("express");
const bookRouter = express.Router();
PORT = process.env.PORT || 8000;
const pool = require("../db.js");
const {
  getBooks,
  createBooks,
  getSingleBook,
  deleteBook,
} = require("../controllers/books.js");

// BOOK REQUESTS

//GET
bookRouter.get("/", getBooks);
bookRouter.get("/:id", getSingleBook);

//POST
bookRouter.post("/", createBooks);

// DELETE BOOKS
bookRouter.delete("/:id", deleteBook);

module.exports = bookRouter;
