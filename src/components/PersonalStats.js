import oversmash from 'oversmash'
import React, { Component } from 'react'
import { Grid, Image, Segment } from 'semantic-ui-react'

class PersonalStats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: undefined,
            completeStats: undefined,
            specificHero: undefined
        }
    }

    getData = (url) =>
        fetch(url)
            .then(resp => resp.json())

    // api used for overwatch stats
    // https://ow-api.com/docs/#profile
    componentDidMount() {
        this.getData("https://ow-api.com/v1/stats/pc/us/cats-11481/profile")
            .then(data => this.setState({ profile: data }))
        this.getData("https://ow-api.com/v1/stats/pc/us/cats-11481/complete")
            .then(data => this.setState({ completeStats: data }))
        this.getData("https://ow-api.com/v1/stats/pc/us/cats-11481/heroes/soldier76,dVa")
            .then(data => this.setState({ specificHero: data }))
    }

    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Segment>
                            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                        </Segment>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column width={11}>
                        <Grid>
                            <Grid.Column width={16}>
                                <Grid.Row>
                                    <Segment>
                                        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                                    </Segment>
                                </Grid.Row>
                                <Grid.Row>
                                    <Segment>
                                        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                                    </Segment>
                                </Grid.Row>
                                <Grid.Row>
                                    <Segment>
                                        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                                    </Segment>
                                </Grid.Row>
                                <Grid.Row>
                                    <Segment>
                                        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                                    </Segment>
                                </Grid.Row>
                            </Grid.Column>
                        </Grid>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Grid>
                            <Grid.Column width={16}>
                                <Grid.Row>
                                    <Segment>
                                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                                    </Segment>
                                </Grid.Row>
                                <Grid.Row>
                                    <Segment>
                                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                                    </Segment>
                                </Grid.Row>
                                <Grid.Row>
                                    <Segment>
                                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                                    </Segment>
                                </Grid.Row>
                            </Grid.Column>  
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
            </Grid>


        )
    }
}

export default PersonalStats;
