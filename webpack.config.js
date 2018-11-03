require('dotenv').config();

const webpack = require('webpack');

module.exports = {
  entry: './source/javascripts/all.js',
  output: {
    path: __dirname + '/source/javascripts',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      LAMBDA_ENDPOINT: JSON.stringify(process.env.LAMBDA_ENDPOINT),
      STRIPE_PUBLISHABLE_KEY: JSON.stringify(process.env.STRIPE_PUBLISHABLE_KEY)
    })
  ]
}
