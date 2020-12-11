import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Upload from "./components/Upload";
import Header from './components/Header'



function App() {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route component={Upload} path="/upload" />
        <Route component={Home} path="/" exact/>
      </Switch>
    </HashRouter>
  );
}

export default App;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
