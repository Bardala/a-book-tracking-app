import Book from "./Book";
import * as BooksAPI from "../BooksAPI";
import PropTypes from "prop-types";

const Bookshelf = (props) => {
  const { books, title, setBooks } = props;

  // const handleChange = (book, shelf) => {
  //   book.shelf = shelf;
  //   BooksAPI.update(book, shelf).then(() => {
  //     setBooks([...books.filter((b) => b.id !== book.id), book]);
  //   });
  // };

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
                    // handleShelfChange={handleChange}
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
