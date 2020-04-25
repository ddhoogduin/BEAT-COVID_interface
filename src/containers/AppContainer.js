import React, {Component} from 'react'
import {connect} from "react-redux";

import Dashboard from "../components/dashboard";


class AppContainer extends Component {

    render() {
        return <Dashboard />
    }
}

const mapStateToProps = (state) => {
    return {}
};
export default connect(mapStateToProps,{} )(AppContainer)