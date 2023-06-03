module.exports = {
  plugins: [
    "prettier",
    "simple-import-sort",
    "sort-keys-fix",
    "validate-jsx-nesting",
    "@typescript-eslint",
  ],
  extends: [
    "airbnb-typescript",
    "react-app",
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    "@typescript-eslint/no-explicit-any": [
      "error",
      {
        ignoreRestArgs: true,
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        args: "none",
        vars: "all",
      },
    ],
    "@typescript-eslint/semi": ["off"],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/*.test.js",
          "**/*.test.jsx",
          "**/*.test.ts",
          "**/*.test.tsx",
          "src/tests/**/*",
        ],
      },
    ],
    "import/prefer-default-export": "off",
    "max-len": [
      "warn",
      {
        code: 80,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    "no-plusplus": [
      "error",
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    "object-curly-spacing": ["warn", "always"],
    "react/destructuring-assignment": "off",
    "react/jsx-boolean-value": "off",
    "react/jsx-key": "error",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-sort-props": [
      2,
      {
        callbacksLast: false,
        shorthandFirst: false,
        shorthandLast: false,
        ignoreCase: true,
        noSortAlphabetically: false,
      },
    ],
    "react/jsx-wrap-multilines": "off",
    "react/no-unescaped-entities": "off",
    "react/prop-types": "off",
    "sort-keys-fix/sort-keys-fix": "warn",
    "validate-jsx-nesting/no-invalid-jsx-nesting": "error",
  },
};
