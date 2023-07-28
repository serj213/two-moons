module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript'],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs},', './**/*.{ts,tsx}']
    }
  ],
  parserOptions: { project: ['tsconfig.json'] },
  plugins: ['react'],
  rules: {
    '@typescript-eslint/consistent-type-imports': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/semi': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/no-deprecated': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off'
  }
};
