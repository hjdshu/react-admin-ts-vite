module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/react-in-jsx-scope": "off",
    // allow jsx syntax in js files (for next.js project)
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".ts", ".tsx", ".jsx"] },
    ], //should add ".ts" if typescript project
    // 在创建对象字面量时不允许键重复 {a:1,a:1}
    "no-dupe-keys": 2,
    // 语句强制分号结尾
    semi: [2, "always"],
    // 禁止 for 循环出现方向错误的循环，比如 for (i = 0; i < 10; i--)
    "for-direction": "error",
    // 不允许重复导入
    "no-duplicate-imports": "error",
    // 禁止在数组中出现连续的逗号，如 let foo = [,,]
    "no-sparse-arrays": "error",
    // 不允许使用未定义的值
    "no-undef": 2,
    // 禁止在 return, throw, break 或 continue 之后还有代码
    "no-unreachable": "error",
    // 禁止使用 eval
    "no-eval": "error",
    // 禁止将自己赋值给自己
    "no-self-assign": "error",
    // @fixable jsx 中的属性必须用双引号
    "jsx-quotes": ["error", "prefer-double"],
    // @fixable 对象字面量中冒号前面禁止有空格，后面必须有空格
    "key-spacing": [
      "error",
      {
        beforeColon: false,
        afterColon: true,
        mode: "strict",
      },
    ],
  },
};
