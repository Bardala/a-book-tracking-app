import PropTypes from "prop-types";

const Book = (props) => {
  const {
    book,
    bookTitle,
    author,
    imgURL,
    bookShelf,
    handleChange,
    isSearching,
  } = props;

  const shelves = [
    { id: 1, title: "Currently Reading", shelfName: "currentlyReading" },
    { id: 2, title: "Want to Read", shelfName: "wantToRead" },
    { id: 3, title: "Read", shelfName: "read" },
  ];

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
            onChange={(e) => handleChange(e.target.value, book)}
            value={bookShelf}
          >
            {isSearching && (
              <option value="none" disabled>
                Add to...
              </option>
            )}
            {!isSearching && (
              <option value="none" disabled>
                Move to...
              </option>
            )}
            {shelves.map((shelf) => (
              <option key={shelf.id} value={shelf.shelfName}>
                {shelf.title}
              </option>
            ))}
            {!isSearching && <option value="none">None</option>}
          </select>
        </div>
      </div>
      <div className="book-title">{bookTitle}</div>
      <div className="book-authors">{author && author.join(", ")}</div>
    </div>
  );
};

export default Book;

Book.propTypes = {
  book: PropTypes.object.isRequired,
  bookTitle: PropTypes.string.isRequired,
  author: PropTypes.array,
  imgURL: PropTypes.string,
  bookShelf: PropTypes.string,
  handleChange: PropTypes.func,
  isSearching: PropTypes.bool,
};
