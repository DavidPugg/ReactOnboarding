import React from 'react';
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import '../css/all.scss';
import '../css/progressbar.scss';

export default function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}
