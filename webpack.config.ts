import webpack from "webpack";
import { buildConfiguration } from "config/buildConfiguration";

export default module.exports = ():webpack.Configuration => {
  const config: webpack.Configuration = buildConfiguration()

  return config;
};
