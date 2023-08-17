import { StoryblokIcon } from './StoryblokIcon'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__icon}>
        <StoryblokIcon />
      </div>
      <div className={styles.header__titles}>
        <h1 className={styles.header__title}>Next.js Plugin</h1>
        <h2 className={styles.header__subtitle}>
          Created with
          <code>
            <a
              className={styles.header__link}
              target="_blank"
              href="https://www.npmjs.com/package/@storyblok/app-extension-auth"
            >
              @storyblok/app-extension-auth
            </a>
          </code>
          .
        </h2>
      </div>
    </header>
  )
}
