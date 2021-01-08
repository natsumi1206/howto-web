module.exports = {
  plugins: ["vue"],
  extends: ["eslint:recommended", "plugin:vue/recommended"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-undef": 0,
    "no-extra-parens": 1,
    "quotes": [1,"double"],
  },
};
