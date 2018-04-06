const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin
const path = require('path')
const env = require('yargs').argv.env
const ReloadPlugin = require('reload-html-webpack-plugin')

let outputFile
let plugins = []

if (env === 'build') {
  // plugins.push(new UglifyJsPlugin({minimize: true}))
  outputFile = 'library.min.js'
} else {
  outputFile = 'library.js'
}

const library = {
  entry: `${__dirname}/src/index.js`,
  devtool: 'source-map',
  output: {
    path: `${__dirname}/lib`,
    filename: outputFile,
    library: 'plotly-js-material-design',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },

  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js']
  },

  plugins
}

let test
test = {
  entry: `${__dirname}/test/index.js`,
  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./test')],
    extensions: ['.json', '.js']
  },

  plugins: [...plugins, new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'index.html',
    inject: true
  }), new ReloadPlugin()],

  devServer: {
    contentBase: __dirname
  }
}

if (env === 'build') {
  test.plugins.splice(test.plugins.length - 1, 1)
  // plugins.push(new UglifyJsPlugin({minimize: true}))
  test.output = {
    path: `${__dirname}/docs`,
    libraryTarget: 'umd',
    filename: outputFile,
    umdNamedDefine: true
  }
}

module.exports = [library, test]
