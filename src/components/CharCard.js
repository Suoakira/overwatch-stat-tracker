import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

class CharCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { name, age, description, difficulty } = this.props.char
        return ( 
            <Card>
                {/* <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' /> */}
                <Card.Content>
                    <Card.Header>{name}</Card.Header>
                    <Card.Meta>
                        <span className='date'>Age: {age}</span>
                    </Card.Meta>
                    <Card.Description>{description}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        {difficulty}
      </a>
                </Card.Content>
            </Card>
         );
    }
}
 
export default CharCard;