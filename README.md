# MyReads Project

## Main Page

    * The main page shows 3 shelves for books. Each book is with its title and all of its authors.
    * The main page has a control that allows users to move books between shelves. The control should be tied to each book instance. The state of the book should not be changed when the page is refreshed.
    *When the browser is refreshed, the same information is displayed on the page.

## Search Page

    * The search page has a search input field.
    * As the user types into the search field, books that match the query are displayed on the page, along with their titles and authors.
    * Search results are not shown when all of the text is deleted out of the search input box.
    * Invalid queries are handled and prior search results are not shown.
    * The search works correctly when a book does not have a thumbnail or an author. (To test this, try searching for "poetry" and "biography").
    * The user is able to search for multiple words, such as “artificial intelligence.”

## Routing

    * The main page contains a link to the search page. When the link is clicked, the search page is displayed and the URL in the browser’s address bar is /search.
    * The search page has a link to the main page. When the link is clicked, the main page is displayed and the URL in the browser’s address bar is /.

## Code Functionality

    * Component state is passed down from parent components to child components.
    * The state variable is not modified directly
    * setState() function is used correctly.
    * All JSX code is formatted properly and functional.
    * There are no JS errors in the console.

## installation

    * npm install
    * npm start
