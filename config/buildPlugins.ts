import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { ProgressPlugin, WebpackPluginInstance } from 'webpack';
import { IBuildPath } from './types/config';

export const buildPlugins = (paths: IBuildPath): WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: paths.html
    }),
    new ProgressPlugin()
  ];
};
