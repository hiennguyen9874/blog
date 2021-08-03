module.exports = {
  root: true,
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
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },

  settings: {
    react: {
      version: 'detect',
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.js', '.jsx', '.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        project: './tsconfig.eslint.json',
      }, // this loads <rootdir>/tsconfig.json to eslint
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', './'],
      },
    },
  },
  plugins: [
    'import',
    'react',
    'react-hooks',
    '@typescript-eslint',
    'eslint-plugin-prettier',
    'simple-import-sort',
  ],
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    // 'react' was used before it was defined
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { variables: false }],
    // Missing file extension "ts" for ...
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
    // JSX not allowed in files with extension '.tsx'
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    // Promises must be handled appropriately or explicitly marked as ignored with the `void` operator
    '@typescript-eslint/no-floating-promises': 'off',
    // is already declared in the upper scope
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    // Use our .prettierrc file as source
    'prettier/prettier': ['warn', {}, { usePrettierrc: true }],
    // Disallow usage of the any type
    '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],
    // Prevent import all library
    'no-restricted-imports': [
      'error',
      {
        paths: ['lodash'],
      },
    ],
    // turn on errors for missing imports
    'import/no-unresolved': 'error',
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
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    // https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-empty-function': ['warn'],
    // Disable devDependencies for storybook
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '.storybook/**',
          'src/stories/**',
          '**/*.stories.tsx',
        ],
      },
    ],
    // Disable require default export
    'import/prefer-default-export': 'off',
  },
};
