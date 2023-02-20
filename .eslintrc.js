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
    plugins: ['@typescript-eslint'],
    rules: {
        camelcase: [
            'error',
            {
                properties: 'never',
                ignoreDestructuring: true,
                ignoreImports: true,
            },
        ],
        'func-style': ['error', 'expression'],
        'no-restricted-imports': [
            'error',
            {
                patterns: ['moment'],
            },
        ],
        'no-console': ['error', { allow: ['warn', 'error'] }],
    },
}
