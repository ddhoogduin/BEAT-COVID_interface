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

class DonutChart extends React.Component{
    state = {data1:{}, data2:{}}


    chart = () =>{
        const data = [{
            hole: .4,
            type: "pie",
            values: [2, 3, 4, 4],
            labels: ["Wages", "Operating expenses", "Cost of sales", "Insurance"],
            textinfo: "label+percent",
            textposition: "outside",
            automargin: true
        }]
        return(
            <Plot
                className={'full-size'}
                data={data}
                layout={{showlegend: false}}
            />
        )
    }
    panes = [
        {
            menuItem: 'Breathing system',
            render: () => <Tab.Pane  attached={true} as={'div'}>
                {this.chart()}
            </Tab.Pane>,
        },
        {
            menuItem: 'Something else',
            render: () => <Tab.Pane attached={true} as={'div'}>test
            </Tab.Pane>,
        },
        {
            menuItem: 'Something else',
            render: () => <Tab.Pane attached={false} as={'div'}>Tab 3 Content</Tab.Pane>,
        },
    ]

    render() {

        return(
            <>
                <Tab menu={{ secondary: true, pointing: true }} panes={this.panes} />
            </>
        )
    }


}



export default SizeMe()(DonutChart)