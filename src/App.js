import React, { Component } from "react";
import stl from "./App.module.sass";
import Calendar from "./components/Calendar";

class App extends Component {
  render() {
    return (
      <div className={stl.App}>
        <Calendar />
      </div>
    );
  }
}

export default App;
