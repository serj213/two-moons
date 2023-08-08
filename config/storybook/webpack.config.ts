import webpack, { RuleSetRule } from 'webpack';
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

  const ruleSVG = {
    test: /\.svg$/,
    enforce: 'pre',
    loader: require.resolve('@svgr/webpack')
  }

  config?.resolve?.modules && config.resolve.modules.push(paths.src);
  config?.resolve?.extensions &&
  config?.resolve?.extensions.push('.ts', '.tsx');
  config?.module?.rules && config.module.rules.push(buildScssLoader(true));
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    // eslint-disable-next-line @typescript-eslint/prefer-includes
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });
  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack']
  });

  return config;
};
