// webpack.config.js

const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './client/src/js/index.js',
      install: './client/src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'client', 'dist'),
    },
    plugins: [
      // Generate client/index.html in the dist folder
      new HtmlWebpackPlugin({
        template: './client/index.html',
        filename: 'index.html',
        chunks: ['main'],
      }),
      // Generate client/dist/install.html in the dist folder
      new HtmlWebpackPlugin({
        template: './client/dist/index.html', // Update the template path
        filename: 'install.html',
        chunks: ['install'],
      }),
      new WebpackPwaManifest({
        name: 'Progressive-Web-Application-Text-Editor',
        short_name: 'App',
        description: 'PWA Text Editor',
        background_color: '#ffffff',
        theme_color: '#31a9e1',
        start_url: '/', // Specify the start URL of your application
        publicPath: 'client/src/images/logo.png', // Specify the public path of your assets
        icons: [
          {
            src: 'client/src/images/logo.png', // Updated path
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons'),
          },
          {
            src: './favicon.ico',
            sizes: [16, 32, 64],
            destination: path.join('assets', 'icons'),
          },
        ],        
      }),
      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: 'src-sw.js',
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
