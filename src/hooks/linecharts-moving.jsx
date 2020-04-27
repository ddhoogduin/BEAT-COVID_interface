import React, { useState } from 'react';
import {Icon, Menu} from "semantic-ui-react";
import createPlotlyComponent from 'react-plotly.js/factory';
import Plotly from 'plotly.js-basic-dist'
import SizeMe from 'react-sizeme'
const Plot = createPlotlyComponent(Plotly);

const hb_options = [72, 73, 73, 74, 74, 74, 75, 75, 75, 75, 75,75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 76, 76, 76, 76, 77, 77,78]
const bp_high_options = [ 84,84,84,84,84,84,84,84,84,84,83, 85, 85, 85, 85, 85, 85]
const bp_low_options = [55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55, 60,60,60, 60,60,60, 60,60,60, 60,60, 60,60, 60,60]
const sat_options = [ 120, 120, 150,150,150,160,160,160,160,160,160,170, 170, 180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180]

function isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return true;
}

const fakeData = (n, options) =>{
    const y =[]
    for(let i=0; i < n; i++){
        y.push(options[Math.floor(Math.random() * options.length)])
    }
    return y;
}

class LineChartsMoving extends React.Component{
    state = {heartBeat: {}, bp_high:{}, bp_low:{}, sat: {},sat_base:{}, revisionId: 0,     layout: {
        datarevision: 0,
            xaxis: {
                autorange: true,
                showgrid: false,
                zeroline: false,
                showline: false,
                autotick: false,
                ticks: '',
                showticklabels: false,
            },
            yaxis: {
                zeroline: false,
                range: [40, 135]
            },
            yaxis2: {
                overlaying: 'y',
                side: 'right',
                range: [0, 220],
            },
            xaxis2: {
                autorange: true,
                showgrid: false,
                zeroline: false,
                showline: false,
                autotick: false,
                showticklabels: false,
                ticks: '',
                overlaying: 'x',
                side: 'top'
}
        }}


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
        const hb = {
            x: Array.from(Array(200).keys()),
            y:fakeData(200, hb_options),
            type: 'scatter',
            mode: 'lines',
            marker: {color: 'red'},
            string:Math.random().toString(36).substring(7)
        }
        const bp_high = {
            x: Array.from(Array(200).keys()),
            y:fakeData(200, bp_high_options),
            type: 'scatter',
            mode: 'lines',
            marker: {color: '#f54242'},
            string:Math.random().toString(36).substring(7)
        }
        const bp_low = {
            x: Array.from(Array(200).keys()),
            y:fakeData(200, bp_low_options),
            type: 'scatter',
            mode: 'lines',
            fill: 'tonexty',
            marker: {color: '#f54242'},
            string:Math.random().toString(36).substring(7)
        }
        const sat = {
            x: Array.from(Array(200).keys()),
            y:fakeData(200, sat_options),
            type: 'scatter',
            mode: 'lines',
            yaxis: 'y2',
            xaxis: 'x2',
            mirror: true,
            side: 'top',
            marker: {color: 'green'},
            string:Math.random().toString(36).substring(7)
        }
        const sat_base = {
            x: Array.from(Array(200).keys()),
            y:fakeData(200, [220]),
            type: 'scatter',
            mode: 'lines',
            yaxis: 'y2',
            xaxis: 'x2',
            mirror: true,
            side: 'top',
            fill: 'tonexty',
            marker: {color: 'green'},
            string:Math.random().toString(36).substring(7)
        }
        this.setState({heartBeat: hb, bp_high:bp_high, bp_low:bp_low, sat:sat, sat_base:sat_base})
    }

    render() {
        const layout = this.state.layout
        if(!isEmpty(this.state.heartBeat)){
            const {heartBeat, bp_high, bp_low, sat} = this.state
            setTimeout(
                () => {
                    let new_hb = this.updateData(heartBeat, hb_options)
                    let new_bp_high = this.updateData(bp_high, bp_high_options)
                    let new_bp_low = this.updateData(bp_low, bp_low_options)
                    let new_sat = this.updateData(sat, sat_options)
                    this.setState({
                        heartBeat: new_hb,
                        bp_high: new_bp_high,
                        bp_low: new_bp_low,
                        sat: new_sat,
                        revisionId: this.state.revisionId+1}
                    )
                    layout.datarevision = this.state.revisionId+1
                }, 200);
        }
        return(
            <>
                <Plot
                    layout={layout}
                    revision={this.state.heartBeat}
                    className={'full-size'}
                    data={[this.state.heartBeat, this.state.bp_high, this.state.bp_low, this.state.sat, this.state.sat_base]}
                />
            </>
        )
    }


}



export default SizeMe()(LineChartsMoving)