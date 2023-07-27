export type TBuildMode = "development" | "production";

export interface IBuildPath {
  entry: string;
  output: string;
  src: string;
  html: string;
}

export interface IBuildEnv {
    mode: TBuildMode
}

export interface IBuildOptions {
    paths: IBuildPath,
    mode: TBuildMode
}