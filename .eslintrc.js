module.exports = {
    env: {
        "browser": true,
        "es2021": true
    },
    extends: [
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "airbnb",
        "prettier",
        "stylelint-config-standard",
        "stylelint-config-prettier"
    ],
    parserOptions: {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    plugins: [
        "react"
    ],
    rules: {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "quotes": ["error", "single"],
        "indent": ["error", "tab"]
    }
};