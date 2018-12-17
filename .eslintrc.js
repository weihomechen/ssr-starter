module.exports = {
  extends: 'eslint-config-beidou',
  rules: {
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/forbid-prop-types': [
      1,
      {
        forbid: ['any']
      }
    ],
    'react/prefer-stateless-function': 0,
    'no-template-curly-in-string': 0,
    'react/no-danger': 0,
    'react/prop-types': 0,
    'no-restricted-globals': 0,
    'arrow-parens': 0,
    'react/jsx-wrap-multilines': 0,
    'max-len': 0,
    'no-nested-ternary': 0,
    'no-new': 0
  },
};
