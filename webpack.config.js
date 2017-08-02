const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './js/index.js',
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin()
  ]
}
