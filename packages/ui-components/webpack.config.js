const webpack = require("webpack");
const { resolve, join } = require("path");

module.exports = {
  context: resolve(__dirname, "src"),
  entry: {
    lib: "lib"
  },
  output: {
    filename: "[name].bundle.js",
    path: resolve(__dirname, "lib")
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: join(__dirname, "lib"),
    compress: true,
    port: 9000
  }
};
