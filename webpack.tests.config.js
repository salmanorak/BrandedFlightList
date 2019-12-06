/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './test/main.js',
    output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'test'),
    },
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
            ]
          }
        ]
    }
};
