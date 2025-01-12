module.exports = {
  env: {
    node: true,
    jest: true,
    es2021: true,
  },
  globals: {
    NodeJS: true,
  },
  extends: ["airbnb-base", "eslint-config-prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "import/extensions": "off",
    "no-underscore-dangle": "off",
    "no-plusplus": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "import/no-extraneous-dependencies": "off",
    "import/no-unresolved": "off",
    "lines-between-class-members": "off",
  },
};
