// @ts-check
import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import typescriptEslint from "typescript-eslint";

/** @type { import("typescript-eslint").ConfigWithExtends } */
export const baseConfig = {
  files: ["src/**/*.ts"],
  ignores: ["test/**", "dist/**"],
};

export default typescriptEslint.config(
  {
    ...eslint.configs.all,
    ...baseConfig,
  },
  {
    ...eslintConfigPrettier,
    ...baseConfig,
  },
  ...typescriptEslint.configs.recommended.map((config) => ({
    ...config,
    ...baseConfig,
  })),
  {
    ...baseConfig,
    rules: {
      "@typescript-eslint/no-namespace": [
        "error",
        {
          allowDeclarations: true,
        },
      ],
      "sort-imports": [
        "error",
        {
          allowSeparatedGroups: true,
          ignoreDeclarationSort: true,
          ignoreMemberSort: true,
        },
      ],
    },
  },
);
