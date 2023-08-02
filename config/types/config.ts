export type TBuildMode = 'development' | 'production';

export interface IBuildPath {
  entry: string
  output: string
  src: string
  html: string
}

export interface IBuildEnv {
  mode: TBuildMode
  port: string
}

export interface IBuildOptions {
  paths: IBuildPath
  mode: TBuildMode
  port: string
}
