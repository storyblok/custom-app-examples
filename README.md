> **⚠️ DEPRECATION NOTICE ⚠️**
>
> This template repository (`custom-app-examples`) is **deprecated** and no longer actively maintained or recommended.
>
> Please refer to the new central repository, **`storyblok/space-tool-plugins`**, for examples, boilerplates, and the standard approach to developing Space Plugins (or Tool Plugins) for Storyblok. This new location provides updated resources and represents the standard going forward.
>
> *   **➡️ New Space Plugin projects should use the resources found in `storyblok/space-tool-plugins`.**
> *   **➡️ Existing projects based on this template should refer to `storyblok/space-tool-plugins` for updates and best practices.**
>
> Find the new resources here:
> *   **GitHub:** [https://github.com/storyblok/space-tool-plugins](https://github.com/storyblok/space-tool-plugins)
> *   **Tool plugins documentation:** [https://www.storyblok.com/docs/plugins/tool-plugins](https://www.storyblok.com/docs/plugins/tool-plugins/)
> *   **Space plugins documentation:** [https://www.storyblok.com/docs/plugins/space-plugins](https://www.storyblok.com/docs/plugins/space-plugins/)
> *   
>
> Thank you for your understanding.

<img src="https://a.storyblok.com/f/51376/x/19b4879a86/logo.svg" width="200" alt="Storyblok Logo">

# Custom Apps Examples

A collection of custom apps for Storyblok created by the community. Read more about creating custom apps [here](https://www.storyblok.com/docs/plugins/custom-application). Custom apps can be built by any partner. Read more about our partners and how to become one of them [here](https://www.storyblok.com/partners).

- [Next.js starter](./app-nextjs-starter)
- [Nuxt.js starter](./app-nuxtjs-3-starter) (Work in progress)

<!-- AUTO-GENERATED-CONTENT:START (TOC:collapse=true&collapseText=Table of Content) -->
<details>
<summary>Table of Content</summary>

- [Example Repositories](#example-repositories)
- [Contributing](#contributing)

</details>
<!-- AUTO-GENERATED-CONTENT:END -->

## Example Repositories

The following examples live in their own Github repository.

<!-- AUTO-GENERATED-CONTENT:START (COMMUNITY_EXAMPLES_TABLE)-->
| Example | Author |
|:-------|:------:|
| **[Storyblok Workflow App](https://github.com/storyblok/storyblok-workflow-app)** <br/> A Storyblok custom app for managing workflow stages | [storyblok](http://github.com/storyblok) |
<!-- AUTO-GENERATED-CONTENT:END -->
## Contributing

**Have an example?** Submit a PR or [open an issue]().We are happy to accept more examples from the community.

<details>
<summary>Adding an example in this repository</summary>

1. Create a new folder for your custom app

2. Add a `README.md` file in your example folder with a markdown table of the following format:

Name | Description | Author
------------ | ------------- | -------------
Name of your custom app | Short description | [Your Github](https://github.com/lisilinhart/)

3. Make sure your contribution matches the linting setup for this repo:

  Run the linting via

  ```bash
  npm run lint
  ```

4. Regenerate the README.md with the following command

  ```bash
  npm run docs
  ```

5. Open a new pull request with your example. ⚡️
</details>


<details>
<summary>Adding an example in a different repository</summary>


If you want to be listed in the [Example Repositories](#example-repositories), follow these steps:

1. Create a new entry with a `name`, `description`, and `githubUrl` in the `community-examples.json` file.

2. Regenerate the README.md with the following command

  ```bash
  npm run docs
  ```

3. Open a new pull request with your example. ⚡️


</details>

