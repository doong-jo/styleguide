module.exports = {
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: './tsconfig.json',
      },
      plugins: ['@typescript-eslint', 'import', 'prettier'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:prettier/recommended',
        'airbnb',
        'airbnb/hooks',
        'airbnb-typescript',
        "next/core-web-vitals"
      ],
      rules: {
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 'off',
        'arrow-parens': 'off',
        'object-curly-newline': 'off',
        'implicit-arrow-linebreak': 'off',
        'operator-linebreak': 'off',
        'newlines-between': 'always',
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': [
          'error',
          { devDependencies: ['**/*.test.ts', '**/*.test.tsx'] },
        ],
        'import/order': [
          'warn',
          {
            groups: [
              'builtin',
              'external',
              'internal',
              'parent',
              'sibling',
              'index',
              'object',
              'type',
            ],
            pathGroups: [
              {
                pattern: 'next',
                group: 'builtin',
                position: 'before',
              },
              {
                pattern: 'react',
                group: 'builtin',
                position: 'before',
              },
              {
                pattern:
                  '{@dictionary,@components,@hooks,@utils,@data-access,@assets/**/*}',
                group: 'parent',
                position: 'before',
              },
            ],
            pathGroupsExcludedImportTypes: ['next'],
          },
        ],
      },
    },
  ],
};
