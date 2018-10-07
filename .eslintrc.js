
module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
          "experimentalObjectRestSpread": true,
          "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react", "import"
    ],
    "parser": "babel-eslint",
    "settings": {
      "import/parser": "babel-eslint",
      "import/resolve": {
        "moduleDirectory": ["node_modules", "src"]
      }
    },
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        "react/jsx-uses-vars": [
          "error"
        ]
    }
};
