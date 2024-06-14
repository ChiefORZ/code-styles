import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import _import from 'eslint-plugin-import';
import jsonFiles from 'eslint-plugin-json-files';
import react from 'eslint-plugin-react';
import sortKeysFix from 'eslint-plugin-sort-keys-fix';
import validateJsxNesting from 'eslint-plugin-validate-jsx-nesting';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...fixupConfigRules(
    compat.extends(
      'airbnb-typescript',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
    ),
  ),
  {
    plugins: {
      import: fixupPluginRules(_import),
      react: fixupPluginRules(react),
      'sort-keys-fix': sortKeysFix,
      'validate-jsx-nesting': validateJsxNesting,
      '@typescript-eslint': fixupPluginRules(typescriptEslint),
    },
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 5,
      sourceType: 'script',
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@typescript-eslint/no-explicit-any': [
        'error',
        {
          ignoreRestArgs: true,
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          args: 'none',
          vars: 'all',
        },
      ],
      '@typescript-eslint/indent': 'off',
      '@typescript-eslint/semi': ['off'],
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            '**/*.test.js',
            '**/*.test.jsx',
            '**/*.test.ts',
            '**/*.test.tsx',
            'src/tests/**/*',
          ],
        },
      ],
      'import/prefer-default-export': 'off',
      'max-len': [
        'warn',
        {
          code: 100,
          ignoreComments: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
        },
      ],
      'no-plusplus': [
        'error',
        {
          allowForLoopAfterthoughts: true,
        },
      ],
      'object-curly-spacing': ['warn', 'always'],
      'react/destructuring-assignment': 'off',
      'react/jsx-boolean-value': 'off',
      'react/jsx-key': 'error',
      'react/jsx-one-expression-per-line': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-sort-props': [
        'error',
        {
          callbacksLast: false,
          ignoreCase: true,
          noSortAlphabetically: false,
          shorthandFirst: false,
          shorthandLast: false,
        },
      ],
      'react/jsx-wrap-multilines': 'off',
      'react/no-unescaped-entities': 'off',
      'react/prop-types': 'off',
      'sort-keys-fix/sort-keys-fix': 'warn',
      'validate-jsx-nesting/no-invalid-jsx-nesting': 'error',
    },
  },
  {
    files: ['**/*.json'],
    plugins: {
      'json-files': jsonFiles,
    },
    rules: {
      'json-files/require-engines': 'warn',
      'json-files/require-license': 'warn',
      'json-files/require-unique-dependency-names': 'error',
      'json-files/sort-package-json': 'warn',
    },
  },
];
