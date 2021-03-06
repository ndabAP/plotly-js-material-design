const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')
const env = require('yargs').argv.env
const HtmlWebpackPlugin = require('html-webpack-plugin')

let plugins = []
if (env === 'build') plugins.push(new UglifyJsPlugin())

const library = {
  mode: 'production',
  entry: `${__dirname}/src/index.js`,
  devtool: 'source-map',
  output: {
    path: `${__dirname}/dist`,
    filename: 'library.min.js',
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
  mode: 'development',
  entry: `${__dirname}/test/index.js`,
  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        query: {compact: false}
      },
      {
        test: /\.js$/,
        use: [
          'ify-loader',
          'transform-loader?plotly.js/tasks/compress_attributes.js',
        ]
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
  })],

  devServer: {
    contentBase: __dirname
  }
}

if (env === 'build') {
  // Remove reload plugin since building never stops
  // test.plugins.splice(test.plugins.length - 1, 1)
  test.output = {
    path: `${__dirname}/docs`,
    libraryTarget: 'umd',
    filename: `app.min.[chunkhash].js`,
    umdNamedDefine: true
  }
}

module.exports = [library, test]
