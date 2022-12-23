const SearchButton = () => {
  return (
    <div className="open-search">
      <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
    </div>
  );
};

export default SearchButton;
