# Quick Cli

Quick Cli 是一个 Vue 组件库构建工具，通过 Quick Cli 可以快速搭建一套功能完备的 Vue 组件库。

### 特性

- 提供丰富的命令，涵盖从开发测试到构建发布的完整流程
- 基于约定的目录结构，自动生成优雅的文档站点和组件示例
- 内置 ESlint、Stylelint 校验规则，提交代码时自动执行校验
- 构建后的组件库默认支持按需引入、主题定制、Tree Shaking

### 快速上手

执行以下命令可以快速创建一个基于 Quick Cli 的项目：

```bash
npx create-Quick-cli-app
```

### 手动安装

```shell
# 通过 npm 安装
npm i @quickAct/cli -D

# 通过 yarn 安装
yarn add @quickAct/cli --dev
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

- [命令](https://github.com/youzan/Quick/tree/dev/packages/Quick-cli/docs/commands.md)
- [配置指南](https://github.com/youzan/Quick/tree/dev/packages/Quick-cli/docs/config.md)
- [目录结构](https://github.com/youzan/Quick/tree/dev/packages/Quick-cli/docs/directory.md)
- [更新日志](https://github.com/youzan/Quick/tree/dev/packages/Quick-cli/changelog.md)


