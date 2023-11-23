import { useEffect, useState } from "react";
import axios from "axios";

export default function Form({setBooks}) {
    const [newBook, setNewBooks] = useState({
        title: "",
        author: "",
        description: "",
        cover_url: "",
        publishedAt: "",
      });
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    console.log(e.target.value);
    setNewBooks((prevBook) => ({
      ...prevBook,
      [id]: value,
    }));
  };

  const createBook = () => {
    axios
      .post("http://localhost:3000/books", newBook)
      .then((response) => {
        setBooks([ response.data, ...books]);
      })
      .catch((err) => console.log(err));
  };


  return (
    <form onSubmit={createBook} className="book_form">
      <h3>Add a new book</h3>
      <label htmlFor="title">Title:</label>
      <input
        onChange={handleInputChange}
        type="text"
        placeholder="Title"
        id="title"

      />
      <label htmlFor="author">Author:</label>
      <input
        onChange={handleInputChange}
        type="text"
        placeholder="Author"
        id="author"
        
      />
      <label htmlFor="description">Description:</label>
      <textarea id="description" cols="30" rows="10" placeholder="Description" onChange={handleInputChange}></textarea>

      <label htmlFor="category">Category:</label>
      <input
        onChange={handleInputChange}
        type="text"
        placeholder="Category"
        id="category"
        
      />
      <label htmlFor="cover_url">Cover:</label>
      <input
        onChange={handleInputChange}
        type="text"
        placeholder="URL"
        id="cover_url"
        
      />
      <label htmlFor="publishedAt">Publication Date:</label>
      <input
        onChange={handleInputChange}
        type="date"
        id="publishedAt"
        
      />
      <button>Submit</button>
    </form>
  );
}
