import React, { Component } from "react";
import Banner from "../Banner/Banner";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  banner = Element => {
    console.log("安安");
    switch (Element) {
      case "open": {
        this.myRef.current.open();
        break;
      }
      case "close": {
        this.myRef.current.close();
        break;
      }
      case "toggle": {
        this.myRef.current.toggle();
        break;
      }
      default:
        console.error();
    }
  };

  render() {
    return (
      <Banner
        openAtStart={false}
        autoToggle={3000} // number || boolean (幾秒開合 || 是否自動開關)
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
        ref={this.myRef}
      />
    );
  }
}

export default App;
