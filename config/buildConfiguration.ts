import path from "path";
import webpack from "webpack";
import { buildDevServer } from "./buildDevServer";
import { buildLoader } from "./buildLoader";
import { buildPlugins } from "./buildPlugins";
import { buildResolve } from "./buildResolve";

export const buildConfiguration = (): webpack.Configuration => {
  const config: webpack.Configuration = {
    mode: "development",
    entry: path.resolve(__dirname, "src", "index.ts"),
    output: {
      filename: "[name][contenthash].js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
    plugins: buildPlugins(),
    module: {
      rules: buildLoader(),
    },
    resolve: buildResolve(),
    devtool: "inline-source-map",
    devServer: buildDevServer(),
  };

  return config;
};
