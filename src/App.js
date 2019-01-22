import React, { Component } from 'react'
import AllOverwatchChars from "./containers/AllOverwatchChars"



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>All Overwatch Chars</h1>
        <AllOverwatchChars />
      </div>
    );
  }
}

export default App;
