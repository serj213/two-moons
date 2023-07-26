import path from "path";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import webpack, { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { buildLoaders } from "./public/buildLoaders";
import { buildPlugins } from "./public/buildPlugins";
import { buildResolvers } from "./public/buildResolvers";
import { buildDevServer } from "./public/buildDevServer";
import { buildConfiguration } from "./public/buildConfiguration";
import { IBuildEnv, IBuildOptions, IBuildPath } from "./public/types/config";

module.exports = (env: IBuildEnv) => {
  const { mode } = env;

  const paths:IBuildPath  = {
    src: path.resolve(__dirname, 'src'),
    entry: path.resolve(__dirname, "src", "index.ts"),
    output:path.resolve(__dirname, "dist"),
    html: path.resolve(__dirname, "index.html")
  }

  const options:IBuildOptions = {
    paths,
    mode
  }

  const config: Configuration = buildConfiguration(options)

  return config;
};
