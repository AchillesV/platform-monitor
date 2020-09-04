# amos-toip template

## code split

发布模式下，默认开启 code split

* 测试 code split

将entry 改为：`app: './src/entry/index.prod.js'`

```bash
npm start
```

## 版本说明

老版本菜单，直接将 RootView 设置为 `import RootView from './../view/mainframe';`

新版本本菜单，直接将 RootView 设置为 `./../view/mainframe/RootFrame2`

## Themes

* 启用themes，只需要执行一次即可

```bash
npm run themes
```

* Themes 开发

```bash
npm run themes-watch
```
