import { useEffect, useState } from "react";
import Bookshelf from "./BookShelf";
import SearchButton from "./SearchButton";
import * as BooksAPI from "../BooksAPI";

const HomePage = () => {
  const [books, setBooks] = useState([]); // books is arr
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
    <div className="list-books">
      <div className="book-shelf">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelves.map((shelf, key) => (
              <Bookshelf
                key={key}
                title={shelf.title}
                books={
                  books &&
                  books.filter((book) => book && book.shelf === shelf.shelfName)
                }
                handleChange={handleChange}
                setBooks={setBooks}
              />
            ))}
          </div>
        </div>
      </div>

      <SearchButton />
    </div>
  );
};

export default HomePage;
