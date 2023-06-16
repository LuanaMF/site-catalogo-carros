import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { CssBaseline } from '@nextui-org/react';
import Button from '@nextui-org/react/button';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles])
    };
  }


  render() {
    return (
      <Html lang="en">
        <Head>{CssBaseline.flush()}</Head>
        <body>
          <Main />
          <NextScript />
          <Button>Click me</Button>
        </body>
      </Html>
    );
  }
}

export default MyDocument;