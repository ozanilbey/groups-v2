const webpack = require('webpack')
const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const extractCSS = new MiniCssExtractPlugin({
  filename: 'site/styles/components.css'
})

const nodeEnv = process.env.NODE_ENV || 'development'
const isProduction = nodeEnv === 'production'

module.exports = {
  devtool: isProduction ? false : 'eval-source-map',
  entry: {
    client: path.join(__dirname, './lib/app.js')
  },
  output: {
    path: path.resolve(__dirname),
    filename: 'site/scripts/[name].js',
    publicPath: '/'
  },
  mode: nodeEnv,
  resolve: {
    alias: {
      '~': path.join(__dirname, './lib')
    },
    extensions: ['*', '.js']
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.tag$/,
        exclude: /node_modules/,
        use: [{
          loader: 'riot-tag-loader',
          options: {
            hot: true,
            type: 'es6'
          }
        }]
      },
      {
        test: /\.js$/,
        exclude: /node_modules(?!\/webpack-dev-server)/,
        use: ['babel-loader']
      },
      {
        test: /\.(css|less)?$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(jpg|png|gif|woff|svg)$/,
        use: 'url-loader'
      }
    ]
  },
  optimization: {
    minimize: false,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/](riot)[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new webpack.DefinePlugin({
      ONSERVER: false,
      'process.env.NODE_ENV': JSON.stringify(nodeEnv)
    }),
    extractCSS,
    new webpack.optimize.AggressiveMergingPlugin(),
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]
}