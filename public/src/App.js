import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Home from "./Home";
import "./style.css";

const App = () => {
  return (
    <>
      <Header />
      <Home />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
