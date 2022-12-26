import { useEffect, useState } from "react";
import Book from "./Book";
import * as BooksAPI from "../BooksAPI";
import PropTypes from "prop-types";

const SearchPage = (props) => {
  const { handleChange, books, setBooks } = props;
  const [input, setInput] = useState("");
  const [state, setState] = useState(true);

  const clearShelves = () => {};

  useEffect(() => {
    BooksAPI.search(input)
      .then((res) => {
        if (!input || res.error) {
          console.log("Input does not exist");
          setState(true);
          return setBooks([]);
        }
        setState(false);
        console.log("res:", res);
        setBooks(res);
      })
      .catch((err) => console.log("SearchError:", err));

    console.log(books);
  }, [input]);

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
            value={input}
            onChange={(e) => {
              e.preventDefault();
              setInput(e.target.value);
            }}
          />
        </div>
      </div>

      {books.length > 0 && (
        <div className="search-books-results">
          <ol className="books-grid">
            {books.map((book, key) => (
              <li key={key}>
                <Book
                  book={book}
                  bookTitle={book.title}
                  author={book.authors}
                  bookShelf={book.shelf}
                  imgURL={book.imageLinks && book.imageLinks.smallThumbnail}
                  handleChange={handleChange}
                  isSearching={true}
                />
              </li>
            ))}
          </ol>
        </div>
      )}
      {state && <div className="doesnot-exist"></div>}
    </div>
  );
};

export default SearchPage;

SearchPage.propTypes = {
  handleChange: PropTypes.func.isRequired,
  books: PropTypes.array,
  setBooks: PropTypes.func,
};
