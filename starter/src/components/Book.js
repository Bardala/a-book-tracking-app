import * as API from "../BooksAPI";

const Book = (props) => {
  const { book, title, author, setBooks, imgURL, bookShelf } = props;

  const handleShelfChange = (e) => {
    if (e.target.value !== "move") {
      API.update(book, e.target.value)
        .then(() => API.getAll())
        .then((updateShelf) => setBooks(updateShelf));
    }
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
            onChange={(e) => handleShelfChange(e)}
            defaultValue={bookShelf}
          >
            <option value="none" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{author}</div>
    </div>
  );
};

export default Book;
