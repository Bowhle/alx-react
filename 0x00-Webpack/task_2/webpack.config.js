const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
  mode: 'production', // Set Webpack mode to production
  entry: './js/dashboard_main.js', // Entry point of your application
  output: {
    filename: 'bundle.js', // Output filename
    path: path.resolve(__dirname, 'public'), // Output directory (absolute path)
    assetModuleFilename: 'images/[hash][ext][query]', //custom filename for assets
  },
  module: {
    rules: [
      {
        test: /\.css$/i, // Rule for CSS files
        use: [
          MiniCssExtractPlugin.loader, // Extract CSS into separate file
          'css-loader', //  Interprets @import and url() like import/require() and will resolve them
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // Rule for image files
        type: 'asset', // Use asset module type
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 10KB
          },
        },
        generator: {
          filename: 'images/[hash][ext][query]', // Output filename
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css', // Output filename for the CSS file
    }),
    new ImageMinimizerPlugin({
      minimizer: {
        implementation: ImageMinimizerPlugin.imageminMinify,
        options: {
          // Lossless optimization with the following settings:
          // Feel free to experiment with different options for the best results
          plugins: [
            ['mozjpeg', { progressive: true }],
            ['pngquant', { quality: [0.6, 0.8] }],
            ['gifsicle', { interlaced: true }],
            [
              'svgo',
              {
                plugins: [
                  {
                    name: 'preset-default',
                    params: {
                      override: {
                        removeViewBox: false, // Keep the viewBox attribute
                        addAttributesToSVGElement: {
                          params: {
                            attributes: [
                              { name: 'xmlns', value: 'http://www.w3.org/2000/svg' },
                            ],
                          },
                        },
                      },
                    },
                  },
                ],
              },
            ],
          ],
        },
      },
    }),
  ],
};

