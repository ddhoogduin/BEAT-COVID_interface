import React, { useState } from 'react';
import {Icon, Menu} from "semantic-ui-react";
import createPlotlyComponent from 'react-plotly.js/factory';
import Plotly from 'plotly.js-basic-dist'
import SizeMe from 'react-sizeme'
const Plot = createPlotlyComponent(Plotly);



const LineCharts = (props) =>{
    const data = [{
        x: [1999, 2000, 2001, 2002],
        y: [10, 15, 13, 17],
        type: 'scatter'
    }];
    return(
        <>
            <Plot
                data={[
                    {
                        x: [1, 2, 3],
                        y: [2, 6, 3],
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: {color: 'red'},
                    },
                    {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
                ]}
                layout={ {width: props.size.width, title: 'A Fancy Plot'} }
            />
        </>
    )
}



export default SizeMe()(LineCharts)