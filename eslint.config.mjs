import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: {
    extends: ["eslint:recommended"],
  },
});

const config = [
  {
    ignores: ["node_modules/**", ".next/**", "out/**", "dist/**", ".source/**"],
  },
  ...compat.extends(
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:@next/next/recommended",
    "next/core-web-vitals",
    "next/typescript"
  ),
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    languageOptions: {
      parser: await import("@typescript-eslint/parser"),
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": (await import("@typescript-eslint/eslint-plugin"))
        .default,
    },
    rules: {
      semi: "error",
      "no-multiple-empty-lines": "error",
      indent: "off",
      "no-unsafe-optional-chaining": "warn",
      "prettier/prettier": "error",
      "react/jsx-no-target-blank": "off",
      "react/no-unescaped-entities": "off",
      "react/no-children-prop": "off",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
  {
    files: ["**/*.mdx"],
    languageOptions: {
      parser: await import("eslint-mdx"),
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      mdx: await import("eslint-plugin-mdx"),
    },
    rules: {
      "mdx/no-unescaped-entities": "off",
      "mdx/no-unused-expressions": "off",
    },
  },
];

export default config;
