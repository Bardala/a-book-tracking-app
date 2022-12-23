import "./App.css";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <SearchPage />

          <HomePage />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
