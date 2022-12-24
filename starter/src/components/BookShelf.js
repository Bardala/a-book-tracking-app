import Book from "./Book";
import PropTypes from "prop-types";

const Bookshelf = (props) => {
  const { books, shelfTitle, handleChange } = props;

  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfTitle}</h2>

        <div className="bookshelf-books">
          <ol className="books-grid">
            {books &&
              books.map((book, key) => (
                <li key={key}>
                  <Book
                    book={book}
                    bookTitle={book.title}
                    author={book.authors}
                    bookShelf={book.shelf}
                    imgURL={book.imageLinks && book.imageLinks.smallThumbnail}
                    handleChange={handleChange}
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
  shelfTitle: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
