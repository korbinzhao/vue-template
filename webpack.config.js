const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const fs = require('fs');

// 获取当前项目目录下的 page
const pages = fs.readdirSync('./src/pages');

const entry = {},
  plugins = [];

pages && pages.map(page => {
  entry[page] = [`./src/pages/${page}/index.js`];
  plugins.push(
    new HtmlWebPackPlugin({
      template: `./src/pages/${page}/index.html`,
      filename: `./${page}/index.html`,
      chunks: [page]
    })
  );
});

module.exports = env => {

  return {
    entry,
    output: {
      path: path.join(__dirname, "dist"),
      filename: "[name]/index.js"
    },
    devServer: {
      contentBase: path.join(__dirname, "src/pages"), // 该配置用于配置 devserver 启动 src 目录下的所有页面
      port: 8080,
      disableHostCheck: true
    },
    module: {
      rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.vue$/,
          use: {
            loader: "vue-loader",
            options: {
              postcss: [
                require('postcss-px2rem')({
                  remUnit: 72
                }),
                require('autoprefixer')()
              ]

            }
          }
        },
        {
          test: /\.html$/,
          use: [{
            loader: "html-loader",
            options: {
              minimize: false
            }
          }]
        }
      ]
    },
    plugins

  }
};
