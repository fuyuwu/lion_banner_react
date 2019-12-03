import React, { Component } from "react";
import Banner from "../Banner/Banner";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Banner
        openAtStart={true}
        autoToggle={false} // number || boolean (幾秒開合 || 是否自動開關)
        button={{
          closeText: "收合",
          openText: "展開",
          class: "btn"
        }}
        class={{
          closed: "closed",
          closing: "closing",
          opened: "opened",
          opening: "opening"
        }}
        transition={true}
        whentransition={function() {
          console.log("whenTransition");
        }}
      />
    );
  }
}

export default App;
