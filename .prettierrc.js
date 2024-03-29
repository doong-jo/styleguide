/*
  reference: https://github.com/Parker-Ledoux/prettier-airbnb-config
*/
module.exports = {
  $schema: 'http://json.schemastore.org/prettierrc',
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['clsx', 'tw'],
  arrowParens: 'avoid',
  bracketSpacing: true,
  bracketSameLine: false,
  jsxSingleQuote: false,
  printWidth: 100,
  proseWrap: 'always',
  quoteProps: 'as-needed',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
};
