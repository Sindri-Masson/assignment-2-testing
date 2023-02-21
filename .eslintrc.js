module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'sindri'],
    rules: {
        'sindri/no-moment': 'error',
        'sindri/no-console': 'error',
        'sindri/camel-case': 'error',
    },
}
