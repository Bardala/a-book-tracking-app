import { useEffect, useState } from "react";
import Bookshelf from "./BookShelf";
import SearchButton from "./SearchButton";
import * as bookApi from "../BooksAPI";
const HomePage = () => {
  const [books, setBooks] = useState([]);
  // shelves names is written in the API
  const shelves = [
    { title: "Currently Reading", shelfName: "currentlyReading" },
    { title: "Want to Read", shelfName: "wantToRead" },
    { title: "Read", shelfName: "read" },
  ];

  useEffect(() => {
    bookApi.getAll().then((data) => {
      console.log(data);
    });
  });

  return (
    <div className="list-books">
      <div className="book-shelf">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          <div>{<Bookshelf />}</div>
        </div>
      </div>

      <SearchButton />
    </div>
  );
};

export default HomePage;
