const path = require("node:path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode:"development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "main.js",
  },
 plugins: [new HtmlWebpackPlugin({ template: "./src/template.html" }),new MiniCssExtractPlugin({ filename: "styles.css",
    }),],
module: {
  rules: [
    { test: /\.css$/i, use: [MiniCssExtractPlugin.loader, "css-loader"] },
    { test: /\.html$/i, loader: "html-loader" },
    { test: /\.(png|svg|jpg|jpeg|gif)$/i,type: "asset/resource"},
  ],
},
};  
