import React from "react";

import "./App.css";
import Header from "./Header";
import SideBar from "./SideBar";
import Feed from "./Feed";

//2:34

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app__body">
        <SideBar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
