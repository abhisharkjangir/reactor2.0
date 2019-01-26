import "@babel/polyfill";
import React, { Component } from "react";
import Header from "./components/header";
import Routes from "./routes";
import "./styles/main.scss";

class App extends Component {
  render() {
    return (
      <div id="app">
        <Header />
        <div id="content">
          <Routes />
        </div>
      </div>
    );
  }
}

export default App;
