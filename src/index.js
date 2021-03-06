import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Frontload } from "react-frontload";
import { ConnectedRouter } from "react-router-redux";
import createStore from "./store";
import * as serviceWorker from "./serviceWorker";
import App from "./app";

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();

// Create a store and get back itself and its history object
const { store, history } = createStore();

// Running locally, we should run on a <ConnectedRouter /> rather than on a <StaticRouter /> like on the server
// Let's also let React Frontload explicitly know we're not rendering on the server here
const Application = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Frontload noServerRender={true}>
        <App />
      </Frontload>
    </ConnectedRouter>
  </Provider>
);

const root = document.querySelector("#root");

if (root.hasChildNodes() === true) {
  // If it's an SSR, we use hydrate to get fast page loads by just
  // attaching event listeners after the initial render
  // Loadable.preloadReady().then(() => {
  //   hydrate(Application, root);
  // });
} else {
  // If we're not running on the server, just render like normal
  render(Application, root);
}
