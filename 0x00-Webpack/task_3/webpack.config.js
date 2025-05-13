const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development', // Sets mode to development
  entry: {
    header: './modules/header/header.js',
    body: './modules/body/body.js',
    footer: './modules/footer/footer.js',
  },
  output: {
    filename: '[name].bundle.js', // Output filename format for chunks
    path: path.resolve(__dirname, 'public'),
    assetModuleFilename: 'images/[hash][ext][query]',
  },
  devtool: 'inline-source-map', // Enable inline source mapping
  devServer: {
    static: './public', // Serves content from the 'public' directory
    port: 8564, // Sets the development server port
    open: true, // Automatically opens the browser
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
        generator: {
          filename: 'images/[hash][ext][query]',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // Cleans the build folder before each build
    new MiniCssExtractPlugin({
      filename: '[name].css', // Outputs filename for CSS chunks
    }),
    new HtmlWebpackPlugin({
      title: 'ALX Dashboard', // Sets the title of the HTML page
      inject: 'body',
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](jquery|lodash)[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};
