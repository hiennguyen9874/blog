module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    tsconfigRootDir: __dirname,
    project: './tsconfig.eslint.json',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.js', '.jsx', '.ts', '.tsx'],
    },
    react: {
      version: 'detect',
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/resolver': {
      typescript: {
        project: './tsconfig.eslint.json',
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', './'],
      },
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'prettier/react',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier/@typescript-eslint',
  ],
  plugins: [
    'prettier',
    'import',
    'react',
    'react-hooks',
    '@typescript-eslint',
    'eslint-plugin-prettier',
  ],
  rules: {
    'prettier/prettier': ['error'],
    'import/no-unresolved': 'error', // turn on errors for missing imports
    'react/jsx-filename-extension': [0, { extensions: ['.tsx'] }],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': [
      0,
      { html: 'ignore', custom: 'ignore', explicitSpread: 'ignore' },
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': 2,
    'import/order': [
      2,
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
      },
    ],
    'import/newline-after-import': 1,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
