var webpack = require('webpack');
module.exports = {
  entry: './index.js',

  output: {
    path:'./public',
    filename:'bundle.js'
  },

  plugins:process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ] : [],

  module: {
    loaders: [
      { 
        test: /\.jsx?$/, 
        exclude: /node_modules/, 
        loader: 'babel',
        query:{
          presets:['es2015','react']
        }
      }
    ]
  }
}
