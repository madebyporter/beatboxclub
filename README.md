# The Beatbox Club

## Setting up the development environment

Install Ruby + RubyGems. \
Install Node.js + npm.

Then:

```
bundle install
npm install
cd player && npm install
```

Copy the file `.env_sample` to `.env` and fill in the details.

### Making React work when accessed from other devices

If you want the React parts of the site to work when accessed from other devices (e.g. from your phone), change the `WEBPACK_DEVELOPMENT_SERVER_URL` in your `.env` file to look like this, where you replace `xx.xx.xx.xx` with the ip address of your development computer.

```
WEBPACK_DEVELOPMENT_SERVER_URL="http://xx.xx.xx.xx:8081"
```

Your ip address is shown to you when you start the Middleman server.

### React Code formatting

The React code is formatted using [Prettier](https://prettier.io/). Activate Prettier support in your IDE:

* VS Code: https://github.com/madskristensen/JavaScriptPrettier
* WebStorm: https://prettier.io/docs/en/webstorm.html

Prettier is already installed locally through npm, so you shouldn't have to install it again.

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

## Update the local data from Contentful

```
bundle exec middleman contentful
```

## How to fix `ArgumentError: invalid byte sequence in US-ASCII` when running any `bundle` command on macOS

[GitHub answer](https://github.com/gjtorikian/html-proofer/issues/476#issuecomment-391025176)