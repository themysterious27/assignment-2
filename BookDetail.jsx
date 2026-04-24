import React from "react";
import { useParams, Link } from "react-router-dom";
import { books } from "./BookList";

function BookDetail() {
  const { id } = useParams();

  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return <h2>Book not found</h2>;
  }

  return (
    <div className="container">
      <div className="book-detail">
        <h2>{book.title}</h2>

        <p><b>Author:</b> {book.author}</p>
        <p><b>Description:</b> {book.description}</p>

        {book.imageUrl && (
          <img src={book.imageUrl} alt={book.title} width="200" />
        )}

        <br />

        <Link to="/" className="back-link">
           Back
        </Link>
      </div>
    </div>
  );
}

export default BookDetail;