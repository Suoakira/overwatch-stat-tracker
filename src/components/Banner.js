import React from 'react'
import { Grid } from "semantic-ui-react"
const Banner = () => {
    return ( 

        <Grid centered={true}>
            <Grid.Row centered={true} columns={1} >
                <Grid.Column >
            <img src="https://okgamers.com/wp-content/uploads/2018/01/Overwatch-Banner.jpg" />
                </Grid.Column>
            </Grid.Row>
        </Grid>
 );
}
 
export default Banner;