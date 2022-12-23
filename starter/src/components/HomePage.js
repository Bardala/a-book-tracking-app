import Bookshelf from "./BookShelf";
import SearchButton from "./SearchButton";

const HomePage = () => {
  return (
    <div className="list-books">
      <Bookshelf />

      <SearchButton />
    </div>
  );
};

export default HomePage;
