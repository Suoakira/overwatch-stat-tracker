import React, { Component } from 'react'
import AllOverwatchChars from "./containers/AllOverwatchChars"
import OverWatchData from "./components/OverWatchData"

import { Grid, Header } from "semantic-ui-react"
import NavBar from "./containers/NavBar"
import Banner from "./components/Banner"
import { Route } from "react-router-dom"



class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Grid centered={true}>
          <Grid.Row centered={true}>
            <Grid.Column centered={true}>
        <Header>All Overwatch Chars</Header>
              <Banner />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Route exact path='/allchars' component={(props) => <AllOverwatchChars />} />
              <OverWatchData />
            </Grid.Column>
          </Grid.Row>

        </Grid>
      </div>
    );
  }
}

export default App;
