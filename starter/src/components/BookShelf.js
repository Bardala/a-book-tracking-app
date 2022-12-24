import Book from "./Book";
import * as BooksAPI from "../BooksAPI";
import PropTypes from "prop-types";

const Bookshelf = (props) => {
  const { books, title, setBooks } = props;

  const handleChange = (shelf, book) => {
    BooksAPI.update(book, shelf)
      .then((updatedShelves) => {
        console.log(updatedShelves);
        console.log(BooksAPI.getAll());
        return BooksAPI.getAll(); // return {promise} has books
      })
      .then((returnedBooks) => setBooks(returnedBooks));
  };

  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>

        <div className="bookshelf-books">
          <ol className="books-grid">
            {books &&
              books.map((book) => (
                <li>
                  <Book
                    book={book}
                    title={book.title}
                    author={book.authors}
                    setBooks={setBooks}
                    bookShelf={book.shelf}
                    imgURL={book.imageLinks && book.imageLinks.smallThumbnail}
                    handleShelfChange={handleChange}
                  />
                </li>
              ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Bookshelf;

Bookshelf.propTypes = {
  books: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  setBooks: PropTypes.func.isRequired,
};
