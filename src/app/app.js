// The basics
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

// Action creators and helpers
import { isServer } from '../store';
import Header from './components/header';
import Routes from './routes';

import './styles/main.css';

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

const mapStateToProps = state => ({});


export default withRouter(
  connect(
    mapStateToProps,
    null
  )(App)
);
