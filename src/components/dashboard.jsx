import React from 'react';
import {
    Card,
    Container,
    Grid,
    GridColumn,
    Header,
    Icon,
    Image,
    Input,
    Label,
    Menu,
    Segment,
    Sidebar
} from 'semantic-ui-react'
import PatientInfo from "../hooks/patientInfo";
import LineCharts from "../hooks/linecharts";
import UserOptions from '../hooks/userOptions'
import Clock from 'react-digital-clock';

class Dashboard extends React.Component{

    renderHeader(){
        return(
            <Menu secondary>
                <Menu.Item>
                    <Icon name='arrow left' />
                    Terug naar het patienten overzicht
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <UserOptions/>
                    </Menu.Item>
                    <Menu.Item>
                        <Label as='a' color={'blue'}>
                            <center><Icon name='calendar' /><br/><br/></center>
                            {new Date().toLocaleDateString()}
                        </Label>
                        <Label as='a' color={'green'}>
                            <center><Icon name='clock' /><br/><br/></center>
                            <Clock hour12= {false} />
                        </Label>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }

    renderMenu(){
        return(
                <Grid>
                        <Grid.Column width={3} className={'sidebar-client'}>
                            <div className={'logo-menu-box'}>
                                <Header as='h1' icon>
                                    Patient overview
                                    <Header.Subheader>BEAT-COVID web-app </Header.Subheader>
                                </Header>
                            </div>
                            <Menu fluid vertical inverted>
                                <PatientInfo/>
                            </Menu>
                        </Grid.Column>
                        <Grid.Column width={13} className={'mainContent-client'}>
                            <Container fluid>
                                <Grid>
                                    <Grid.Column width={16}>
                                        <Segment>
                                            <LineCharts/>
                                        </Segment>
                                    </Grid.Column>
                                </Grid>
                            </Container>
                        </Grid.Column>
                </Grid>

        )
    }
    render() {
        return (
            <div className='clientOverviewSection'>
                <Grid>
                    <Grid.Column>
                        <Segment>
                            {this.renderHeader()}
                        </Segment>
                    </Grid.Column>
                </Grid>
                <Grid className={'no-offset'}>
                    <Grid.Column className={'client-content-container'}>
                        {this.renderMenu()}
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}
export default Dashboard;