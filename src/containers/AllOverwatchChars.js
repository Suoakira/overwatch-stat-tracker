import React, { Component } from 'react'
import CharCard from "../components/CharCard"
import NavBar from "../containers/NavBar"
import { Loader, Grid } from "semantic-ui-react"

class AllOverwatchChars extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            overwatchChars: undefined,
            pictureData: [
                "https://d1u1mce87gyfbn.cloudfront.net/hero/ana/icon-portrait.png",
                "https://d1u1mce87gyfbn.cloudfront.net/hero/bastion/icon-portrait.png",
                "https://d1u1mce87gyfbn.cloudfront.net/hero/dva/icon-portrait.png",
                "https://d1u1mce87gyfbn.cloudfront.net/hero/genji/icon-portrait.png",
                "https://d1u1mce87gyfbn.cloudfront.net/hero/hanzo/icon-portrait.png",
                "https://d1u1mce87gyfbn.cloudfront.net/hero/junkrat/icon-portrait.png",
                "https://d1u1mce87gyfbn.cloudfront.net/hero/lucio/icon-portrait.png",
                "https://d1u1mce87gyfbn.cloudfront.net/hero/mccree/icon-portrait.png",

                "https://d1u1mce87gyfbn.cloudfront.net/hero/mei/icon-portrait.png",
                "https://d1u1mce87gyfbn.cloudfront.net/hero/mercy/icon-portrait.png",
                "https://d1u1mce87gyfbn.cloudfront.net/hero/pharah/icon-portrait.png",
                "https://d1u1mce87gyfbn.cloudfront.net/hero/reaper/icon-portrait.png",
                "https://d1u1mce87gyfbn.cloudfront.net/hero/reinhardt/icon-portrait.png",
                "https://d1u1mce87gyfbn.cloudfront.net/hero/roadhog/icon-portrait.png",
                "https://d1u1mce87gyfbn.cloudfront.net/hero/soldier-76/icon-portrait.png",
                "https://d1u1mce87gyfbn.cloudfront.net/hero/symmetra/icon-portrait.png",

                "https://d1u1mce87gyfbn.cloudfront.net/hero/torbjorn/icon-portrait.png",
                "https://d1u1mce87gyfbn.cloudfront.net/hero/tracer/icon-portrait.png",
                "https://d1u1mce87gyfbn.cloudfront.net/hero/widowmaker/icon-portrait.png",
                "https://d1u1mce87gyfbn.cloudfront.net/hero/winston/icon-portrait.png",
                "https://d1u1mce87gyfbn.cloudfront.net/hero/zarya/icon-portrait.png",
                "https://d1u1mce87gyfbn.cloudfront.net/hero/zenyatta/icon-portrait.png",
                "https://d1u1mce87gyfbn.cloudfront.net/hero/sombra/icon-portrait.png",
                "https://d1u1mce87gyfbn.cloudfront.net/hero/orisa/icon-portrait.png",
            ]
         }
    }
    
    renderOverwatchChars = () => {
        const copyData = [...this.state.overwatchChars.data]
        console.log(copyData)
        return copyData.map((char, key) => <CharCard char={char} potrait={this.state.pictureData[key]} />)
    }

    fetchData = (url) =>
        fetch(url)
            .then(resp => resp.json())


    componentDidMount() {
        this.fetchData("https://overwatch-api.net/api/v1/hero")
        .then(overwatchChars => this.setState({ overwatchChars }))

    }
    render() { 

        return ( 
            <React.Fragment>
                    <NavBar />
                    {this.state.overwatchChars ? 
                        <Grid columns={4} centered>
                                {this.renderOverwatchChars()}
                        </Grid>
                        :
                        <Loader />

                }

            </React.Fragment>
         )
    }
}
 
export default AllOverwatchChars;