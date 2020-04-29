import React, { useState } from 'react';
import {Icon, Menu, Tab} from "semantic-ui-react";
import createPlotlyComponent from 'react-plotly.js/factory';
import Plotly from 'plotly.js-basic-dist'
import SizeMe from 'react-sizeme'
import medication from "../utils/fakeData/medication";
const Plot = createPlotlyComponent(Plotly);



const fakeData = (n) =>{
    const y =[]
    for(let i=0; i < n; i++){
        y.push(Math.floor(Math.random() * 4000)+1000)
    }
    return y;
}

class LinechartsTabs extends React.Component{
    state = {data1:{}, data2:{}, data3:{}}

    panes = [
        {
            menuItem: 'Mocusal Cytokines',
            render: () => <Tab.Pane  attached={true} as={'div'}>
                <Plot
                    className={'full-size large'}
                    data={this.state.data1}
                    layout={{
                        yaxis:{
                            range: [0, 10000]
                        },
                        xaxis:{
                            range: ['2020-04-01', '2020-04-29'],
                            type: 'date'
                        }
                    }}
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
    generateFakeDates = () =>{
        const items = []
        for(let i =1; i < 30; i++){
            items.push(`2020-04-${i}`)
        }
        return items
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
                x: this.generateFakeDates(),
                y:fakeData(30),
                type: 'scatter',
                mode: 'lines',
                fill: 'tonexty',
                visible: visible,
                string:Math.random().toString(36).substring(7)
            }
        })

        const medication_data = medication.map((item)=>{
            return {
                name:item.name,
                x: item.periods,
                y: item.y,
                type: 'line',
                mode: 'lines',
                hoverinfo:"name",
                hoverlabel: {namelength :-1},
                line:{
                    width: 10
                }
            }
        })
        const data1 = [...data, ...medication_data]
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
        const data3 = names2.map((name) =>{
            return {
                name:name,
                x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00'],
                y:[3,3],
                type: 'line',
                mode: 'lines+text',
                text: "test",
                textposition:"center",
                line: {
                    color: 'rgb(55, 128, 191)',
                    width: 20
                }
            }
        })
        this.setState({data1: data1, data2: data2, data3:data3})
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