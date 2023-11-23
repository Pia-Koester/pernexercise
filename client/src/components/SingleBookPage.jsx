import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SingleBookPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    getSingleBook();
  }, []);

  const getSingleBook = async () => {
    try {
      const result = await axios(`http://localhost:3000/books/${id}`);
      console.log(result.data);
      setBook(result.data);
    } catch (error) {}
  };

  const showToastMessage = (title) => {
    toast.success(`${title} Deleted !`, {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };

  const handleDelete = async () => {
    try {
      const result = await axios.delete(`http://localhost:3000/books/${id}`);
      console.log(result);
      showToastMessage(result.data.title);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      {!book ? (
        <p>loading</p>
      ) : (
        <div>
          <h2>{book.title}</h2>
          <img src={book.cover_url} alt={book.title} />
          <p>Author: {book.author}</p>
          <p> Publication Date: {book.publishedat}</p>
          <p>{book.description}</p>
          <button onClick={handleDelete}>Delete Book</button>
          {/* after deletion the user should be redirected back to the books overview  */}
          <ToastContainer
            position="bottom-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
      )}
    </>
  );
}
