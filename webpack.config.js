import path from 'path'
import webpack from 'webpack'
import ManifestPlugin from 'webpack-manifest-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import CompressionPlugin from 'compression-webpack-plugin'
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'

import {
  APPLICATION_ASSET_HOST,
} from './src/server/config/env'
import * as paths from './src/server/config/paths'

const WEBPACK_DEV_SERVER_PORT = 3011

export default (env = { dev: false }) => ({
  context: paths.ROOT_DIR,
  devtool: env.dev ? 'eval' : 'source-map',
  resolve: {
    extensions: [
      '.js',
    ],
    modules: [
      'node_modules',
      'src',
    ],
  },
  entry: {
    app: [
      '@babel/polyfill',
      path.join(paths.SRC_DIR, 'app'),
    ],
  },
  output: {
    path: path.join(paths.PUBLIC_DIR, 'assets'),
    filename: env.dev ? '[name].js' : '[name]-[chunkhash].js',
    chunkFilename: env.dev ? '[name].js' : '[name]-[chunkhash].js.gz',
    publicPath: env.dev ? '/assets/' : APPLICATION_ASSET_HOST,
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js$|\.js.gz$/,
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({
        assetNameRegExp: /\.css$|\.css.gz$/g,
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
        },
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        include: [paths.SRC_DIR],
        use: ['babel-loader', 'svg-react-loader'],
      },
      {
        test: /\.js$/,
        include: [paths.SRC_DIR],
        loader: 'babel-loader',
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp4|webp)$/,
        include: [paths.SRC_DIR],
        loader: 'file-loader',
        options: {
          name: '[name]-[hash].[ext]',
        },
      },
      {
        test: /\.css$/,
        include: [paths.SRC_DIR, paths.NODE_MODULES_DIR],
        use: [
          env.dev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: env.dev ? '[path][name]-[local]' : '[hash:base64:5]',
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        loader: 'file-loader',
        include: [paths.SRC_DIR],
        options: {
          name: '[name]-[hash].[ext]',
          // outputPath: 'css/',
          // publicPath: url => '../css/' + url
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env.dev ? 'development' : 'production'),
    }),
    new MiniCssExtractPlugin({
      filename: env.dev ? '[name].css' : '[name]-[chunkhash].css',
      chunkFilename: env.dev ? '[name].css' : '[name]-[chunkhash].css.gz',
      allChunks: true,
    }),
  ].concat(env.dev ? [
    // ...placeholder for dev only plugins
  ] : [
    new CompressionPlugin({
      test: /\.js$|\.css$|\.gz$/,
      // exclude: /^(home).+\.css$|^(search).+\.css$|^(drywall).+\.css$|^(woolsey).+\.css$/,
      algorithm: 'gzip',
      filename: info => {
        console.log(info)
        const splits = info.file.split('.')
        if (splits[splits.length - 1] === 'gz') {
          console.log('changed tooo', `${info.path}.gz${info.query}`)
          return `${info.path}${info.query}`
        }
        console.log('changed to', `${info.path}.gz${info.query}`)
        return `${info.path}.gz${info.query}`
      },
      minRatio: Infinity,
      threshold: 0,
    }),
    new ManifestPlugin({
      fileName: 'manifest.json',
    }),
  ]),
  devServer: {
    port: WEBPACK_DEV_SERVER_PORT,
    hot: true,
    host: '0.0.0.0',
    // quiet: true,
    // noInfo: true,
    compress: true,
    publicPath: '/assets/',
  },
  mode: env.dev ? 'development' : 'production',
})
