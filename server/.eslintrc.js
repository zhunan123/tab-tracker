module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'amd': true
    },
    'extends': 'standard',
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    "parserOptions": {
        "parser": "babel-eslint",
        "ecmaVersion": 2018,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "ecmaVersion": true
        }
    },
    'plugins': [
        'vue'
    ],
    'rules': { "no-console": "off" },

    "globals": {
        "document": false
    }
}