const webpack = require('webpack');
const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';

const config = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: isProduction ? 'metamascara.min.js' : 'metamascara.js',
    library: 'meta',
    libraryTarget: 'umd',
  },
  optimization: {
    minimize: isProduction,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js'
    ]
  }
};

module.exports = config;