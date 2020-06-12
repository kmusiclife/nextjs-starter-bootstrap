import React from 'react';
import App from 'next/app';
import Layout from '../components/Layout';
import '@fortawesome/fontawesome-free/css/all.css';
import '../styles/styles.sass';

class MyApp extends App {

    static async getInitialProps({ Component, router, ctx }) {

        const { req, res } = ctx;
        let pageProps = {};
        
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        
        return { pageProps }
    }
    render() {
        const { Component, pageProps } = this.props;
        return (<Layout><Component {...pageProps} /></Layout>);
    }
}

export default MyApp;
