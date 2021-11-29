// https://www.nuxtjs.cn/guide/development-tools
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false
  },
  extends: ["@nuxtjs", "plugin:nuxt/recommended"],
  plugins: [],
  // add your custom rules here
  rules: {
    semi: ["error", "always"],
    "no-console": "off",
    "vue/max-attributes-per-line": "off",
    "prefer-const": "off",
    "space-before-function-paren": "off",
    "arrow-parens": "off",
    "import/no-named-as-default-member": "off",
    curly: "off",
    // 'prettier/prettier': ['error', { semi: false }]
    quotes: [0, "double"] // 使用双引号，关闭
    // quotes: ["error", "single"]
  }
};
