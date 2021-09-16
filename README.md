# The Beatbox Club

## Installing dependencies

Install Ruby + RubyGems.

Then:

```
bundle install
```

## Development

### Start Middleman development server

```
bundle exec middleman server
```

### Start React player development server

TODO: Possibly integrate this into Middleman build script \
NOTE: For this to work, the Middleman site currently needs to be opened at http://localhost:PORT/, not via another hostname

```
cd player && npm start
```

## Build for production

### Build Middleman site

```
bundle exec middleman build
```

### Build React player JS

TODO: Possibly integrate this into Middleman build script

```
cd player && npm build
```
