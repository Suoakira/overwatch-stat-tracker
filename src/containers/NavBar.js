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
                    <Menu.Item
                        name='messages'
                        active={activeItem === 'messages'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='friends'
                        active={activeItem === 'friends'}
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