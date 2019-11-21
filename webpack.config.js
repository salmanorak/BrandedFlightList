const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'docs'),
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: '[name].css',
          chunkFilename: '[id].css'
        }),
    ],
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules)/,
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']              
                }
                },
                {
                    loader: 'eslint-loader',
                    options: {
                        fix: true,
                      },
                }
            ]
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                    publicPath: './docs',
                  }
              },
              'css-loader',
              'sass-loader',
            ],
          },
        ]
    },
    devServer: {
      contentBase: './docs',
     hot: true,
    },
};
