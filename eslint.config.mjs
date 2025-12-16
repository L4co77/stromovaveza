import js from "@eslint/js";
import globals from "globals";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import reactRefresh from "eslint-plugin-react-refresh";
import react from "eslint-plugin-react";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      react,
      "react-refresh": reactRefresh,
    },
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["warn"],
      "react/react-in-jsx-scope": "off",
      "eol-last": ["error", "always"],
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    files: ["**/*.test.ts", "**/*.test.tsx"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.vitest,
      },
    },
    rules: {
      // v testoch používame globálne funkcie z Vitestu (describe, it, expect, vi)
      // nechceme, aby na ne no-undef kričal
      "no-undef": "off",
    },
  },
];
