/** @type {import('prettier').Options} */
module.exports = {
  arrowParens: 'always',
  plugins: [
    require('prettier-plugin-tailwindcss'),
    require('prettier-plugin-packagejson'),
  ],
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
};
