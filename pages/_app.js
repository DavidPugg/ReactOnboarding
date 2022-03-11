import React from 'react';
import { store } from '../src/app/store';
import { Provider } from 'react-redux';
import '../src/css/all.scss';
import '../src/css/progressbar.scss';

export default function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}
