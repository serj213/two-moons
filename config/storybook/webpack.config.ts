import webpack from 'webpack';
import path from 'path';
import { buildScssLoader } from '../loaders/buildScssLoader';
import { IBuildPath } from '../types/config';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: IBuildPath = {
    src: path.resolve(__dirname, '..', '..', 'src'),
    html: '',
    output: '',
    entry: ''
  };

  config?.resolve?.modules && config.resolve.modules.push(paths.src);
  config?.resolve?.extensions &&
    config?.resolve?.extensions.push('.ts', '.tsx');
  config?.module?.rules && config.module.rules.push(buildScssLoader(true));

  return config;
};
