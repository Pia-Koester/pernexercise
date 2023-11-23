import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div key={book.id}>
      <h3>{book.title}</h3>
      <img src={book.cover_url} alt={book.title} />
      <p>{book.author}</p>
      <button>
        <Link to={`${book.id}`}>Learn more</Link>
      </button>
    </div>
  );
};

export default BookCard;
