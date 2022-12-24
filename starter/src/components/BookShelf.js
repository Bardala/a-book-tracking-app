import Book from "./Book";
import PropTypes from "prop-types";

const Bookshelf = (props) => {
  const { books, title, handleChange } = props;

  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>

        <div className="bookshelf-books">
          <ol className="books-grid">
            {books &&
              books.map((book, key) => (
                <li key={key}>
                  <Book
                    book={book}
                    title={book.title}
                    author={book.authors}
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
  handleChange: PropTypes.func.isRequired,
};
