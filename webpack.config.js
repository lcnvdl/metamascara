const webpack = require('webpack');
const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';
const exportForNg = process.env.TARGET === 'module';

const filename = `metamascara${(exportForNg ? '.module' : '')}${((!exportForNg && isProduction) ? '.min' : '')}.js`;

const config = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename,
    library: {
      name: exportForNg ? undefined : 'mmascara',
      type: exportForNg ? 'module' : 'umd',
    }
  },
  optimization: {
    minimize: isProduction,
  },
  devtool: exportForNg ? 'inline-source-map' : 'source-map',
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  experiments: {
    outputModule: exportForNg,
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