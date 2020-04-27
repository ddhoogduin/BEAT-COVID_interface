import React, { useState } from 'react';
import {Icon, Menu, Tab} from "semantic-ui-react";
import createPlotlyComponent from 'react-plotly.js/factory';
import Plotly from 'plotly.js-basic-dist'
import SizeMe from 'react-sizeme'
const Plot = createPlotlyComponent(Plotly);

const hb_options = [72, 73, 73, 74, 74, 74, 75, 75, 75, 75, 75,75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 76, 76, 76, 76, 77, 77,78]
const bp_high_options = [ 84,84,84,84,84,84,84,84,84,84,83, 85, 85, 85, 85, 85, 85]
const bp_low_options = [55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55, 60,60,60, 60,60,60, 60,60,60, 60,60, 60,60, 60,60]



const fakeData = (n) =>{
    const y =[]
    for(let i=0; i < n; i++){
        y.push(Math.floor(Math.random() * 4000)+1000)
    }
    return y;
}

class LinechartsTabs extends React.Component{
    state = {data1:{}, data2:{}}

    panes = [
        {
            menuItem: 'Mocusal Cytokines',
            render: () => <Tab.Pane  attached={true} as={'div'}>
                <Plot
                    className={'full-size'}
                    data={this.state.data1}
                />
            </Tab.Pane>,
        },
        {
            menuItem: 'Serum Cytokines',
            render: () => <Tab.Pane attached={true} as={'div'}>
                <Plot
                    className={'full-size'}
                    data={this.state.data2}
                />
            </Tab.Pane>,
        },
        {
            menuItem: 'Viral loads',
            render: () => <Tab.Pane attached={false} as={'div'}>Tab 3 Content</Tab.Pane>,
        },
    ]
    componentDidMount() {
        this.getPlotTracks()
    }

    updateData = (item, options) =>{
        item.y.shift()
        item.y.push(options[Math.floor(Math.random() * options.length)])
        item.string =Math.random().toString(36).substring(7)
        return item
    }
    getPlotTracks = () =>{
        const names = ['IL6-IL1-TNF', 'CD30/TNFRSF8', 'IL-6', 'IL-1b', 'TNF-a']
        const names2 = ['IL7', 'CD12', 'IL-615']

        const data = names.map((name) =>{
            let visible = "legendonly"
            if(['IL6-IL1-TNF', 'CD30/TNFRSF8'].includes(name))
                visible = true
            return {
                name:name,
                x: Array.from(Array(200).keys()),
                y:fakeData(30),
                type: 'scatter',
                mode: 'lines',
                fill: 'tonexty',
                visible: visible,
                string:Math.random().toString(36).substring(7)
            }
        })
        const data2 = names2.map((name) =>{
            let visible = "legendonly"
            if(['IL7'].includes(name))
                visible = true
            return {
                name:name,
                x: Array.from(Array(200).keys()),
                y:fakeData(30),
                type: 'scatter',
                mode: 'lines',
                fill: 'tonexty',
                visible: visible,
                string:Math.random().toString(36).substring(7)
            }
        })
        this.setState({data1: data, data2: data2})
    }

    render() {

        return(
            <>
                <Tab menu={{ secondary: true, pointing: true }} panes={this.panes} />
            </>
        )
    }


}



export default SizeMe()(LinechartsTabs)