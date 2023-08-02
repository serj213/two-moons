import path from 'path'
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import { Configuration } from 'webpack'
import { buildConfiguration } from './config/buildConfiguration'
import { IBuildEnv, IBuildOptions, IBuildPath } from './config/types/config'

module.exports = (env: IBuildEnv) => {
  const { mode, port } = env

  const paths: IBuildPath = {
    src: path.resolve(__dirname, 'src'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html')
  }

  const options: IBuildOptions = {
    paths,
    mode,
    port
  }

  const config: Configuration = buildConfiguration(options)

  return config
}
