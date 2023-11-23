import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import BookCard from "./components/BookCard"
import Form from "./components/Form";

function App() {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    getBooks();
    console.log(books);
  }, []);

  const getBooks = async () => {
    try {
      const result = await axios("http://localhost:3000/books");
      setBooks(result.data);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <h1>Books</h1>
    <Form setBooks={setBooks}/>
      <div>
        {!books ? (
          <p>loading</p>
        ) : ( books.filter((book) => book.is_active).map((book) => {
            return <BookCard key={book.id} book={book}/>;
          })
        )}
      </div>
    </>
  );
}

export default App;
