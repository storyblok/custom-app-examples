import * as React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => (
  <Html lang="en">
    <Head>
      {/* PWA primary color */}
      <meta
        name="theme-color"
        content="#009f9c"
      />
      <link
        rel="shortcut icon"
        href="/favicon.ico"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
)
export default Document
