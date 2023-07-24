const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  const { mode } = env;

  const config = {
    mode: mode,
    entry: path.resolve(__dirname, "src", "index.ts"),
    output: {
      filename: "index.[contenthash].js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
    devtool: 'inline-source-map',
    devServer: {
      static: path.resolve(__dirname, "dist", "index.html"),
      port: 3000,
      open: true,
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
        ],
      },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: path.resolve(__dirname, "index.html"),
      }),
      new webpack.ProgressPlugin(),
    ],
  };

  return config;
};
