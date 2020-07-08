module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  rules: {
    complexity: ['warn', { max: 5 }],
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/class-name-casing': 0,
    '@typescript-eslint/no-unused-expressions': 0,
    'import/no-extraneous-dependencies': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'import/no-unresolved': 0,
    'import/no-dynamic-require': 0,
    'import/order': 0,
    'global-require': 0,
    'no-shadow': 0,
    'no-param-reassign': 0,
    'symbol-description': 0,
    'no-unused-expressions': 0,
    'class-methods-use-this': 0,
    'no-undef': 0,
    'no-console': 0,
    'dot-notation': 0,
    'prefer-template': 0,
    'react/no-danger': 0,
  },
};
