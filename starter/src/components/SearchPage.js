import { useEffect, useState } from "react";
import Book from "./Book";
import * as BooksAPI from "../BooksAPI";
import PropTypes from "prop-types";

const SearchPage = (props) => {
  const { handleChange, books, setBooks } = props;
  const [val, setVal] = useState("");

  useEffect(() => {
    BooksAPI.search(val)
      .then((res) => {
        if (val === "" || res?.length === 0) {
          return setBooks([]);
        }
        console.log(res);
        setBooks(res);
      })
      .catch((err) => console.log(err));

    console.log(books);
  }, [val]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a className="close-search" href="/">
          Close
        </a>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={val}
            onChange={(e) => {
              e.preventDefault();
              setVal(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {books &&
            val &&
            books.map((book, key) => (
              <li key={key}>
                <Book
                  book={book}
                  bookTitle={book.title}
                  author={book.authors}
                  bookShelf={book.shelf}
                  imgURL={book.imageLinks && book.imageLinks.smallThumbnail}
                  handleChange={handleChange}
                  isSearching
                />
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
};

export default SearchPage;

SearchPage.propTypes = {
  handleChange: PropTypes.func.isRequired,
  books: PropTypes.array,
  setBooks: PropTypes.func.isRequired,
};
