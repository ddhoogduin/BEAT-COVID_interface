import React, { useState } from 'react';
import {Icon, Menu} from "semantic-ui-react";
import Patient from "../utils/fakeData/patient";



const PatientInfo = (props) =>{
    return(
        <>
            <Menu.Item>
            <Menu.Header>Personal details <Icon name={'user'} className={'pull-right'}/></Menu.Header>
            </Menu.Item>
            <Menu.Item>
                First name: <b className={'PatientValues'} >{Patient.first_name}</b>
            </Menu.Item>
            <Menu.Item>
                <Icon name={Patient.icon} />
                Last name: <b className={'PatientValues'} >{Patient.last_name}</b>
            </Menu.Item>
            <Menu.Item>
                <Icon name={Patient.icon} />
                Gender: <b className={'PatientValues'} >{Patient.sex}</b>
            </Menu.Item>
            <Menu.Item>
                <Icon name={Patient.icon} />
                Age: <b className={'PatientValues'} >{Patient.age}</b>
            </Menu.Item>
            <Menu.Item>
                <Menu.Header>Preconditions<Icon name={'bell'} className={'pull-right'}/></Menu.Header>
                <Menu.Menu>
                    {renderSubItems(Patient.preconditions)}
                </Menu.Menu>
            </Menu.Item>
            <Menu.Item>
                <Menu.Header>Medication<Icon name={'pills'} className={'pull-right'}/></Menu.Header>
                <Menu.Menu>
                    {renderSubItems(Patient.medication)}
                </Menu.Menu>
            </Menu.Item>
        </>
    )
}
const renderSubItems = (items) =>{
    return items.map((item) =>{
        return (
            <Menu.Item>
                - {item.name}: <b>{item.value}</b>
            </Menu.Item>
        )
    })
}


export default PatientInfo