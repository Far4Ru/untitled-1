# Workbook 2023

Currently docs only

<details>
<summary>Creation</summary>

- node v16.13.1
- npm 9.5.1

npm initialization

> npm init

webpack install

> npm i webpack webpack-cli -D

\+ webpack.config.js

```js
module.exports = {}
```

markdown-loader for .md files

> npm i markdown-loader

css-loader and style-loader for .css files

> npm i css-loader -D\
> npm i style-loader -D

js into modern js - babel

> npm i babel-loader -D

html webpack plugin

> npm i html-webpack-plugin -D

typescript loader

> npm install typescript ts-loader -D

\+ tsconfig.json

```json
{
  "compilerOptions": {
    "outDir": "./dist/",
    "noImplicitAny": true,
    "module": "es6",
    "target": "es5",
    "jsx": "react",
    "allowJs": true,
    "moduleResolution": "node"
  }
}
```

sass-loader

> npm i sass-loader -D

CopyWebpackPlugin

> npm i copy-webpack-plugin -D
</details>