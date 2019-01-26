import React from 'react'
import { Header } from "semantic-ui-react"


const HeaderStats = (props) => {
    return ( 
    <div>
            <Header size="large"><img src={props.profile.icon} alt="" />{props.profile.name}</Header>

    </div> 
    )
}
 
export default HeaderStats;