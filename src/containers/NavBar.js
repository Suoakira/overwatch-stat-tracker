import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'

import { NavLink } from "react-router-dom"

export default class NavBar extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <div>
                <Menu pointing>
                    <NavLink to="/allchars">
                        <Menu.Item name='All Chars' active={activeItem === 'All Chars'} onClick={this.handleItemClick} />
                    </NavLink>
                    <NavLink to="/personal-stats">
                    <Menu.Item
                        name='Stats'
                        active={activeItem === 'Stats'}
                        onClick={this.handleItemClick}
                    />
                    </NavLink>
                    <Menu.Item
                        name='chat'
                        active={activeItem === 'chat'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Input icon='search' placeholder='Search...' />
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>


            </div>
        )
    }
}