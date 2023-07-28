import { RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { buildScssLoader } from './loaders/buildScssLoader';

export const buildLoaders = (isDev: boolean): RuleSetRule[] => {
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  };

  const scssLoader = buildScssLoader(isDev)

  const babelLoader = {
    test: /\.m?js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  }

  return [tsLoader, babelLoader, scssLoader];
};
