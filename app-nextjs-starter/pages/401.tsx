import { NextPage } from 'next'
import { useEffect } from 'react'
import { Layout } from '@src/components/Layout'
import { UnauthorizedIcon } from '@src/components/UnauthorizedIcon'
import styles from '@src/styles/401.module.css'

const Page: NextPage = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.top === window.self) {
      window.location.assign('https://app.storyblok.com/oauth/app_redirect')
    }
  }, [])

  return (
    <Layout>
      <article className={styles.error}>
        <UnauthorizedIcon />
        <h3 className={styles.error__title}>Unauthorized</h3>
        <h4 className={styles.error__subtitle}>Failed to authenticate</h4>
      </article>{' '}
    </Layout>
  )
}

export default Page
