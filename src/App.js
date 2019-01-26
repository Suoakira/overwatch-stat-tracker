import React, { Component } from 'react'
import AllOverwatchChars from "./containers/AllOverwatchChars"
import PersonalStats from "./components/PersonalStats"
import NavBar from "./containers/NavBar"
import Banner from "./components/Banner"

import { Grid, Header } from "semantic-ui-react"
import { Route } from "react-router-dom"



class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Header>All Overwatch Chars</Header>
        <Banner />
        <Route exact path='/allchars' component={(props) => <AllOverwatchChars /> } />

        <Route exact path="/personal-stats" component={(props) => <PersonalStats/> } />

      </div>
    );
  }
}

export default App;
