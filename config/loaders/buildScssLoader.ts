import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildScssLoader = (isDev: boolean) => ({
  test: /\.s[ac]ss$/i,
  use: [
    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,

    {
      loader: 'css-loader',
      options: {
        modules: {
          localIdentName: isDev
            ? '[name]__[local]--[hash:base64:5]'
            : '[hash:base64:5]',
          auto: (resourcePath: string) =>
            Boolean(resourcePath.includes('module'))
        }
      }
    },
    // Compiles Sass to CSS
    'sass-loader'
  ]
});
