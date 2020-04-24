import React from 'react';
import {connect} from 'react-redux';
import {decrementCounter, incrementCounter} from '../redux/actions/counterActions';
import Dashboard from "../components/dashboard";

class DashboardContainer extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
                <Dashboard

                />
        );
    }
}

const mapStateToProps = state => ({
    counter: state.counter.value
});

const mapDispatchToProps = {
    incrementCounter: incrementCounter,
    decrementCounter: decrementCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);

