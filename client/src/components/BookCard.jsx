const BookCard = ({ book }) => {
  return (
    <div key={book.id}>
      <h3>{book.title}</h3>
      <img src={book.cover_url} alt={book.title} />
      <p>{book.author}</p>
      <p>{book.description}</p>
      <p>{book.publishedAt}</p>
    </div>
  );
};

export default BookCard;
