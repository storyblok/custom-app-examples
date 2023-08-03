import { FunctionComponent } from 'react'
import { AppProps } from 'next/app'
import '@src/styles/global.css'

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
)

export default App
