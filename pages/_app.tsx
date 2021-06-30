import React from 'react';
import type { AppProps /*, AppContext */ } from 'next/app';
import '../styles.css';

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }: AppProps) {
    return (<Component {...pageProps} />);
}

export default MyApp;
