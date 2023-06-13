# Nuxt 3 Custom Application Starter

## Local Development

### Install

 Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```
### Environment Variables

First, copy the `.env.example` file and rename to `.env`.


### Secure Tunnel

1. Create a tunnel for you application using [ngrok](https://ngrok.com/). To create a specific domain tunnel as listed below, you need to set up an account.

2. Adjust `BASE_URL`
   inside the `.env` file to your tunnel domain (e.g.: https://<YOUR-HOST-NAME>.ngrok.io).

```bash
ngrok http --region=eu --hostname=<YOUR-HOST-NAME>.ngrok.io 3000 # define region and your hostname domain and use the port your application is running on
```

### Storyblok Custom Application
Before running the project you need to set up a connection between Storyblok and your local or production code.

> **_NOTE:_** In order to create an application you need to have access to the [Partner Portal](https://app.storyblok.com/#/partner/home).
For creating a new custom application you can either follow [this article](https://www.storyblok.com/docs/plugins/custom-application#getting-started) or the steps below.
1. Navigate to `Partner Portal -> Extensions`.
2. Create new Sidebar Application.
3. Open the application settings.
4. Navigate to `OAuth 2.0 adn Pages tab.
5. Set up Production/Preview mode.
    1. `Index to your page` should point to your ngrok URL (e.g.: `https://<YOUR-HOST-NAME>.ngrok.io`).
    2. `Redirection endpoint` points to the callback endpoint (e.g.: `https://<YOUR-HOST-NAME>.ngrok.io/api/authenticate/callback`).
6. Retrieve Client ID and Client Secret and set them inside the `.env` file as `CLIENT_ID` and `CLIENT_SECRET`.

### Run
Run your local development by executing:

```bash 
yarn run dev
```



## Production
See previous sections from Local Development, to see how to set up external dependencies.

1. Build minified bundle by running:
```bash
yarn build
```
2. Set the environment variables.

3. Afterwards start a Nuxt production server:
```bash
yarn start
```
