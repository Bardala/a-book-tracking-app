import * as BooksAPI from "../BooksAPI";
import PropTypes from "prop-types";

const Book = (props) => {
  const { book, title, author, setBooks, imgURL, bookShelf } = props;

  const shelves = [
    { id: 1, title: "Currently Reading", shelfName: "currentlyReading" },
    { id: 2, title: "Want to Read", shelfName: "wantToRead" },
    { id: 3, title: "Read", shelfName: "read" },
  ];

  const handleShelfChange = (shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => BooksAPI.getAll())
      .then((updateShelf) => setBooks(updateShelf));
  };

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${imgURL}")`,
          }}
        ></div>

        <div className="book-shelf-changer">
          <select
            onChange={(e) => handleShelfChange(e.target.value)}
            value={bookShelf}
          >
            <option value="none" disabled>
              Move to...
            </option>

            {shelves.map((shelf) => (
              <option key={shelf.id} value={shelf.shelfName}>
                {shelf.title}
              </option>
            ))}

            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{author.join(", ")}</div>
    </div>
  );
};

export default Book;

Book.propTypes = {
  book: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.array.isRequired,
  setBooks: PropTypes.func.isRequired,
  imgURL: PropTypes.string,
  bookShelf: PropTypes.string.isRequired,
};
