import React from "react";
import ReactDOM from "react-dom";
import store from "./store";
import { Provider } from "react-redux";

import SC from "./container/sc/SCContainer";

import "./styles.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        sample
        <SC />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
