# Quick Cli

Quick Cli 是一个 Vue 组件库构建工具，通过 Quick Cli 可以快速搭建一套功能完备的 Vue 组件库。



### 手动安装

```shell
# 通过 npm 安装
npm i @quick_vue/cli -D

# 通过 yarn 安装
yarn add @quick_vue/cli --dev
```

安装完成后，请将以下配置添加到 package.json 文件中

```json
{
  "scripts": {
    "dev": "quick-cli dev",
    "test": "quick-cli test",
    "lint": "quick-cli lint",
    "build": "quick-cli build",
    "release": "quick-cli release",
    "build-site": "quick-cli build-site"
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "quick commit-lint"
    }
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx,vue}": "eslint --fix",
    "*.{vue,css,less,scss}": "stylelint --fix"
  },
  "eslintConfig": {
    "root": true,
    "extends": ["@quick"]
  },
  "stylelint": {
    "extends": ["@quick/stylelint-config"]
  },
  "prettier": {
    "singleQuote": true
  },
  "browserslist": ["Android >= 4.0", "iOS >= 8"]
}
```

## 详细文档

- [命令](https://github.com/LoveEocding/quick_cli/docs/commands.md)
- [配置指南](https://github.com/LoveEocding/quick_cli/docs/config.md)
- [目录结构](https://github.com/LoveEocding/quick_cli/docs/directory.md)
- [更新日志](https://github.com/LoveEocding/quick_cli/changelog.md)


