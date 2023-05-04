import { useEffect } from 'react'
export const useEmbeddedPage = () => {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }
    const isTopWindow = window.top === window.self
    if (isTopWindow) {
      window.location.assign('https://app.storyblok.com/oauth/app_redirect')
    }
  }, [])
}
