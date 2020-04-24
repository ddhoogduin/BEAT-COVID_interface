import App from 'next/app';
import {Provider} from 'react-redux';
import React from 'react';
import withRedux from "next-redux-wrapper";
import store from '../redux/store';
import 'semantic-ui-css/semantic.min.css'
import "../assets/styles/static.css"
import "../assets/styles/styles.scss"


class CovidApp extends App{

    static async getInitialProps({Component, ctx}) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

        //Anything returned here can be access by the client
        return {pageProps: pageProps};
    }

    render(){
        const {Component, pageProps} = this.props;
        return(
            <Provider store={store}>
                <Component {...pageProps}/>
            </Provider>
        )
    }
}

const makeStore = () => store;

export default withRedux(makeStore)(CovidApp)