import '../src/styles/global.css'
import {FunctionComponent} from "react";
import {AppProps} from "next/app";

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
)

export default App
