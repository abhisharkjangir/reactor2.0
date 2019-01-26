import React from "react";
import { Link } from "react-router-dom";
export default () => (
  <header id="header">
    <h1>Reactor 2.0</h1>
    <Link to="/"> Home </Link> |<Link to="/about"> About </Link> |
    <Link to="/not-found"> Not Found </Link>
  </header>
);
