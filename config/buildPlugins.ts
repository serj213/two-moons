import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack, { WebpackPluginInstance } from "webpack";
import path from "path";

export const buildPlugins = (): WebpackPluginInstance[] => {
  const plugins = [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new webpack.ProgressPlugin(),
  ];

  return plugins;
};
