import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from "../BooksAPI";
import PropTypes from "prop-types";

const SearchPage = (props) => {
  const { handleChange, books } = props;
  const [input, setInput] = useState("");
  const [searchedBooks, setSearchedBooks] = useState([]);

  const setShelves = (searchedBooks, allBooks) => {
    return searchedBooks.map((book) => {
      for (let b of allBooks) {
        if (b.id === book.id) return { ...book, shelf: b.shelf };
      }
      return { ...book, shelf: "none" };
    });
  };

  useEffect(() => {
    if (input.length !== 0) {
      BooksAPI.search(input)
        .then((searchedBooks) => {
          if (!input || searchedBooks.error) {
            return setSearchedBooks([]);
          }
          setSearchedBooks(setShelves(searchedBooks, books));
        })
        .catch((err) => console.log("SearchError:", err));
    } else setSearchedBooks([]);
  }, [input]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <NavLink className="close-search" to="/">
          Close
        </NavLink>
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

      {input && (
        <div className="search-books-results">
          <ol className="books-grid">
            {searchedBooks.map((book, key) => (
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
    </div>
  );
};

export default SearchPage;

SearchPage.propTypes = {
  handleChange: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired,
};
