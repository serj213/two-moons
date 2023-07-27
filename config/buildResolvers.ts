import { ResolveOptions } from "webpack";
import { IBuildPath } from "./types/config";

export const buildResolvers = (paths: IBuildPath):ResolveOptions => {

  return {
    extensions: [".tsx", ".ts", ".js"],
    modules: [paths.src, 'node_modules'],
    preferAbsolute:true,
    alias: {}
  };
};
