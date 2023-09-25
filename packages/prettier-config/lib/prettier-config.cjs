/** @type {import('prettier').Options} */
module.exports = {
  arrowParens: 'always',
  plugins: [
    'prettier-plugin-tailwindcss',
    'prettier-plugin-packagejson',
  ],
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
};
