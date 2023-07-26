import path from "path";
import { Configuration } from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { IBuildOptions } from "./types/config";

export const buildConfiguration = (options: IBuildOptions): Configuration => {

    const {mode, paths} = options
    const isDev = mode === 'development'


    return {
        mode: mode,
        entry: paths.entry,
        output: {
          filename: "index.[contenthash].js",
          path: paths.output,
          clean: true,
        },
        devtool: "inline-source-map",
        devServer: buildDevServer(),
        resolve: buildResolvers(),
        module: {
          rules: buildLoaders(isDev),
        },
        plugins: buildPlugins(paths),
      }
};
