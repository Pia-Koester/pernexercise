import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import BookOverview from "./components/BookOverview";
import Landingpage from "./components/Landingpage";
import SingleBookPage from "./components/SingleBookPage";

function App() {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "red" : "",
                };
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/books"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "red" : "",
                };
              }}
            >
              Books
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/books" element={<BookOverview />} />
        <Route path="/books/:id" element={<SingleBookPage />} />
      </Routes>
    </>
  );
}

export default App;
