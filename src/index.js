import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import BookContextProvider from "./context/BookContext"

ReactDOM.render(
  <BookContextProvider>
    <App />
  </BookContextProvider>,
  document.getElementById("root")
);
