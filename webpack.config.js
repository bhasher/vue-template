const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname + '/dist'
  },
  module: {
    rules: [{ 
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }, {
      test: /\.vue$/, 
      use: 'vue-loader' 
    }, { 
      test: /\.css$/, 
      use: [
        'vue-style-loader', 
        'css-loader'
      ]
    }]
  },
  externals: {
    vue: 'Vue'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new VueLoaderPlugin(),
    new CopyPlugin([
      './src/favicon.ico',
      './src/global.css'
    ])
  ]
};