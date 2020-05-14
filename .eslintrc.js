module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
    rules: {
        semi: ['warn', 'always'],
        quotes: ['warn', 'single', { avoidEscape: true }],
        'no-console': 'warn',
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
    globals: {
        wwLib: 'readonly',
        axios: 'readonly',
        _: 'readonly',
    },
};
