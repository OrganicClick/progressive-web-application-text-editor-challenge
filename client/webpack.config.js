const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './client/index.html',
        filename: 'index.html',
        chunks: ['main'],
      }),
      new WebpackPwaManifest({
        name: 'Progressive-Web-Application-Text-Editor',
        short_name: 'App',
        description: 'PWA Text Editor',
        background_color: '#ffffff',
        theme_color: '#31a9e1',
        icons: [
          {
            src: path.resolve('src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons'),
          },
          {
            src: path.resolve('favicon.ico'),
            sizes: [16, 32, 64],
            destination: path.join('assets', 'icons'),
          },
        ],
      }),
      new InjectManifest({
        swSrc: './src-sw.js', // Relative path to service worker file within client directory
        swDest: 'src-sw.js', // Destination where the injected service worker will be placed
      }),      
    ],

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  };
};
