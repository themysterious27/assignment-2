import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookList from "./BookList";
import BookDetail from "./BookDetail";
import "./App.css";

function App() {
  return (
    <Router>
      <h1 className="main-heading">Week 2 Assignment</h1>

      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/books/:id" element={<BookDetail />} />
      </Routes>
    </Router>
  );
}

export default App;