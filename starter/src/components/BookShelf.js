import Book from "./Book";

const Bookshelf = (props) => {
  const { books, title, setBooks } = props;

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
