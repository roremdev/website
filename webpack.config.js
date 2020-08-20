const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "./src/app.js"),
    index: path.resolve(__dirname, "./src/js/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "js/[name].js"
  },
  mode: "development",
  devServer: {
    host: "localhost",
    hot: true,
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "./src/views/index.pug"),
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",
      template: path.resolve(__dirname, "./src/views/about.pug"),
    }),
    new HtmlWebpackPlugin({
      filename: "projects.html",
      template: path.resolve(__dirname, "./src/views/projects.pug"),
    }),
    new HtmlWebpackPlugin({
      filename: "blog.html",
      template: path.resolve(__dirname, "./src/views/blog.pug"),
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(svg|jpg)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "images/[name].[ext]",
          },
        },
      },
      {
        test: /\.ttf$/,
        use: {
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]",
          },
        },
      },
      {
        test: /\.pug$/,
        use: ["pug-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
