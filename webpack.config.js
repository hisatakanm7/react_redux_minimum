var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    //     rules: [{
    //   		test: /\.css$/,
    //       exclude: /node_modules/,
    //       loader: "babel-loader",
		// use: ExtractTextPlugin.extract({
		// 	use: 'css-loader'
	  //           })
    //     }],
      loaders: [
        {
          test: /.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        }
      ]
    },

    plugins: [
        new ExtractTextPlugin('styles.css'),
    ]
};
