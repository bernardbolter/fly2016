var path = require('path'),
    webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: './assets/js/entry.js',
  output: {
    path: __dirname + '/',
    filename: 'mashup.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|hbs)?$/,
        exclude: [ 'node_modules', 'inbound', 'outbound' ],
        include: path.join(__dirname, 'assets/js'),
        loaders: [ 'handlebars-loader' ]
      }
    ]
  }
};
