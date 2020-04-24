import React from 'react';
import {Card, Container, Icon, Image} from 'semantic-ui-react'

class Dashboard extends React.Component{

    render() {
        return (
            <Card>
                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                <Card.Content>
                    <Card.Header>Matthew</Card.Header>
                    <Card.Meta>
                        <span className={`date example`}>Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description>r
                        Matthew is a musician living in Nashville.
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        22 Friends
                    </a>
                </Card.Content>
            </Card>
        );
    }
}
export default Dashboard;