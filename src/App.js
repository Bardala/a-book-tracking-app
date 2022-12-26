import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import HomePage from "./components/HomePage";
import { useEffect, useState } from "react";
import * as BooksAPI from "./BooksAPI";

function App() {
  const [books, setBooks] = useState([]);
  const shelves = [
    { title: "Currently Reading", shelfName: "currentlyReading" },
    { title: "Want to Read", shelfName: "wantToRead" },
    { title: "Read", shelfName: "read" },
  ];

  useEffect(() => {
    BooksAPI.getAll().then((data) => {
      setBooks(data);
    });
  }, []);

  const handleChange = (shelf, book) => {
    book.shelf = shelf;
    BooksAPI.update(book, shelf).then(() => {
      setBooks([...books.filter((b) => b.id !== book.id), book]);
    });
  };

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/search"
            element={
              <SearchPage
                books={books}
                setBooks={setBooks}
                handleChange={handleChange}
              />
            }
          />

          <Route
            path="/"
            element={
              <HomePage
                shelves={shelves}
                books={books}
                setBooks={setBooks}
                handleChange={handleChange}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
