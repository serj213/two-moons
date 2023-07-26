import path from "path";

export const buildDevServer = () => {
  return {
    static: path.resolve(__dirname, "dist", "index.html"),
    port: 3000,
    open: true,
  };
};
