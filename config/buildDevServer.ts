import { Configuration as DevServerConfiguration } from "webpack-dev-server";

export const buildDevServer = (): DevServerConfiguration => {
  const devServerOptions = {
    port: 3000,
    open: true,
  };

  return devServerOptions;
};
