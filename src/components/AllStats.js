import React from 'react'
import { Grid, Segment, Header } from 'semantic-ui-react'

const AllStats = (props) => {
    console.log(props.competitiveMedals)
    return ( 
        <Grid.Column>
            {
                props.competitiveMedals && 
                    <Segment>
                        <Header size="huge"><img src={"https://cdn.thingiverse.com/renders/03/a6/7b/0f/a6/4a47a0db6e60853dedfcfdf08a5ca249_preview_featured.jpg"} alt="bronze" /> {props.competitiveMedals[1]}</Header>
                        <Header size="huge"><img src={"https://cdn.thingiverse.com/renders/8d/e9/2f/d1/30/4a47a0db6e60853dedfcfdf08a5ca249_preview_featured.jpg"} alt="bronze" /> {props.competitiveMedals[2]}</Header>
                        <Header size="huge"><img src={"https://cdn.thingiverse.com/renders/10/b6/09/d7/42/961bc952d610d18cb0a655a05a24bab9_preview_featured.jpg"} alt="bronze"/> {props.competitiveMedals[3]}</Header>
                    </Segment>
             }   
     }   
    </Grid.Column>
     )
}
 
export default AllStats;