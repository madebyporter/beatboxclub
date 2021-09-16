# The Beatbox Club

## Setting up the development environment

Install Ruby + RubyGems.
Install Node + Node.js.

Then:

```
bundle install
npm install
cd player && npm install
```

Copy the file `.env_sample` to `.env` and fill in the details.

If you want the React parts of the site to work when you open the site on other devices than your development machine (e.g. on your phone), edit your `.env` file and replace `localhost` in the `WEBPACK_DEVELOPMENT_SERVER_URL` with the ip address of your development computer. (Your ip address is shown to you when you start the Middleman server.)

## Start Middleman development server

```
bundle exec middleman server
```

This automatically starts the Webpack development server, too.

## Build for production

```
bundle exec middleman build
```

This automatically builds the Webpack JS bundle, too.
