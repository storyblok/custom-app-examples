import Head from 'next/head'
import { Header } from './Header'
import styles from './Layout.module.css'

const title = 'Storyblok App Starter'
export const description =
  'Learn how to build an sidebar app for Storyblok using Next.js'

export const Layout: React.FunctionComponent<React.PropsWithChildren<{}>> = ({
  children,
}) => (
  <div className={styles.container}>
    <Head>
      <link
        rel="icon"
        href="/public/favicon.ico"
      />
      <meta
        name="description"
        content={description}
      />
      <meta
        name="og:title"
        content={title}
      />
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
    </Head>
    <Header />
    <main className={styles.main}>{children}</main>
  </div>
)
