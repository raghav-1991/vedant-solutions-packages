import js from "@eslint/js";
import react from "eslint-plugin-react";

export default [
  { ignores: ["dist", "node_modules"] },
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx}"],
    plugins: { react },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { document: "readonly", fetch: "readonly", console: "readonly", process: "readonly" },
    },
    settings: { react: { version: "detect" } },
    rules: {
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
];
