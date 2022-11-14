
import { authHandler } from "@storyblok/app-extension-auth";
import { authHandlerParams } from "../auth";

// Disable false warnings
export const config = {
  api: {
    externalResolver: true,
  },
}

export default authHandler(authHandlerParams)
