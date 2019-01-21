import React, { Component } from 'react'
import CharCard from "../components/CharCard"
import { Loader } from "semantic-ui-react"

class AllOverwatchChars extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            overwatchChars: undefined
         }
    }
    
    renderOverwatchChars = () => {
        const copyData = [...this.state.overwatchChars.data]
        console.log(copyData)
        return copyData.map(char => <CharCard char={char} />)
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
                {
                    this.state.overwatchChars ? 
                        this.renderOverwatchChars()
                        :
                        <Loader />

                }

            </React.Fragment>
         )
    }
}
 
export default AllOverwatchChars;