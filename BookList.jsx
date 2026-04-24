import React from "react";
import { Link } from "react-router-dom";



export const books = [
  {
    id: 1,
    title: "Wings of Fire",
    author: "A.P.J. Abdul Kalam",
    description: "Journey of Dr. Kalam from a small town to becoming India's Missile Man.",
    imageUrl: "https://m.media-amazon.com/images/I/71KKZlVjbwL.jpg"
  },
  {
    id: 2,
    title: "The White Tiger",
    author: "Aravind Adiga",
    description: "Story about ambition and class struggle in India.",
    imageUrl: "https://m.media-amazon.com/images/I/81X7G2C6tIL.jpg"
  },
  {
    id: 3,
    title: "The 3 Mistakes of My Life",
    author: "Chetan Bhagat",
    description: "Story of friendship, cricket and life decisions.",
    imageUrl: "https://m.media-amazon.com/images/I/81t2CVWEsUL.jpg"
  },
  {
    id: 4,
    title: "Train to Pakistan",
    author: "Khushwant Singh",
    description: "A powerful story during the partition of India.",
    imageUrl: "https://m.media-amazon.com/images/I/81j5k5F3yPL.jpg"
  }
];



function BookList() {
  return (
    <div className="container">
      <h2>Indian Books</h2>

      {books.map((book) => (
        <div key={book.id} className="book-card">
          <h3>{book.title}</h3>
          <p className="book-author">Author: {book.author}</p>

          <Link to={`/books/${book.id}`}>
            <button>Read More</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BookList;