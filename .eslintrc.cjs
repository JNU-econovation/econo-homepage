module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": "off",
    "@next/next/no-img-element": "off",
    "no-unused-vars": "off",
  },
};
