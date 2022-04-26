import Document, {Head, Html, Main, NextScript} from 'next/document';
import * as React from 'react';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content="#000000" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
          <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&family=Source+Serif+Pro:wght@400;600&display=swap"
            rel="stylesheet"
            crossOrigin
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
