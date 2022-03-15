import React from 'react';
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import '../css/all.scss';
import '../css/progressbar.scss';

import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Head>
                <title>Movie App</title>
                <meta name='description' content='Movie app built with nuxt  :)' />
            </Head>
            <Component {...pageProps} />
        </Provider>
    );
}
