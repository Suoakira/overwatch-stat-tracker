import React, { Component } from 'react';
import { Card, Icon, Image, Grid, GridColumn } from 'semantic-ui-react'

class CharCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { name, age, description, difficulty, health, armour } = this.props.char
        
        return ( 
            <Grid.Column>
                <Card>
                    <Image src={this.props.potrait} />
                    <Card.Content>
                        <Card.Header>{name}</Card.Header>
                        <Card.Meta>
                            <span className='date'>Age: {age}</span>
                        </Card.Meta>
                        <Card.Description>
                            <Card.Content extra>
                                <Icon name='shield alternate' /> {armour}
                            </Card.Content>
                            <Card.Content extra>
                                <Icon name='medkit' /> {health}
                            </Card.Content>

                            <Card.Content>
                                <Icon name='chevron circle up' />
                            {difficulty}
                            </Card.Content>
                            <Card.Content>
                                {description}
                            </Card.Content>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    </Card.Content>
                </Card>
            </Grid.Column>
          
         );
    }
}
 
export default CharCard;