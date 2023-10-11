const OFF = 0; // Turn the rule off
const WRN = 1; // Turn the rule on as a warning (doesn't affect exit code)
const ERR = 2; // Turn the rule on as an error (exit code will be 1)

module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    '@typescript-eslint/no-unused-vars': WRN,
    '@typescript-eslint/explicit-function-return-type': OFF,
    '@typescript-eslint/explicit-module-boundary-types': OFF,
    '@typescript-eslint/member-delimiter-style': OFF,
    '@typescript-eslint/no-empty-function': OFF,
    '@typescript-eslint/no-var-requires': OFF,
    '@typescript-eslint/type-annotation-spacing': ERR,
    'react-native/no-inline-styles': OFF,
  },
};
