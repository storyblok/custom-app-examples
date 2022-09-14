import Head from 'next/head'
import styles from './Layout.module.css'
import {StoryblokIcon} from "./StoryblokIcon";

const title = 'Storyblok App Starter'
export const description = 'Learn how to build an sidebar app for Storyblok using Next.js'

export const Layout: React.FunctionComponent<React.PropsWithChildren<{}>> = ({children}) => (
  <div className={styles.container}>
    <Head>
      <link rel="icon" href="/public/favicon.ico"/>
      <meta
        name="description"
        content={description}
      />
      <meta name="og:title" content={title}/>
      <meta name="twitter:card" content="summary_large_image"/>
    </Head>
    <header className={styles.header}>
      <div className={styles.titleContainer}>
        <StoryblokIcon/>
        <h1 className={styles.title}>
          {title}
        </h1>
      </div>
      <div className={styles.subTitle}>
        Created with&nbsp;
        <code>
          <a
            target="_blank"
            href="https://www.npmjs.com/package/@storyblok/app-extension-auth"
          >
            @storyblok/app-extension-auth
          </a>
        </code>.
      </div>
    </header>
    <main className={styles.main}>{children}</main>
  </div>
)
