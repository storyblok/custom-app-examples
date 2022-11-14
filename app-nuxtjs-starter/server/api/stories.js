import { isAppSessionQuery, sessionCookieStore } from "@storyblok/app-extension-auth";
import { authHandlerParams } from "@src/auth";

export default handle(async (req, res) => {
    try {

        const {query} = req
    
        if (!isAppSessionQuery(query)) {
          // spaceId and userId are not specified, so it is impossible to know from which space and user the request came from
          res.status(401).end()
          return
        }
    
        const sessionStore = sessionCookieStore(authHandlerParams)({req, res})
        const appSession = await sessionStore.get(query)
        if (!appSession) {
          res.status(401).end()
          return
        }
        const stories = await fetch(`https://api.storyblok.com/v1/spaces/${appSession.spaceId}/stories`, {
          headers: {
            Authorization: `Bearer ${appSession.accessToken}`
          },
        })
          .then(res => {
            if (!res.ok) {
              return undefined
            }
            return res.json()
          })
          .then(body =>
            body.stories
          )
          .catch((error) => {
            console.error(error)
            return undefined
          })
        res.json(stories)
      } catch (error) {
        // Should not happen
        res.status(500).end()
      }
  })
