import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Form({}) {
  const showToastMessage = () => {
    toast.success(`Book Submitted !`, {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };
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

  const createBook = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/books", newBook)
      .then((response) => {
        console.log("Response:", response.data);
        showToastMessage();
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
      <textarea
        id="description"
        cols="30"
        rows="10"
        placeholder="Description"
        onChange={handleInputChange}
      ></textarea>

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
      <input onChange={handleInputChange} type="date" id="publishedAt" />
      <button type="submit">Submit</button>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </form>
  );
}
