<h1 align="center">Welcome to G2Plot-Lollipop 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/g2plot-lollipop" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/g2plot-lollipop.svg">
  </a>
  <a href="https://github.com/MrSmallLiu/G2Plot-Lollipop#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/MrSmallLiu/G2Plot-Lollipop/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/MrSmallLiu/G2Plot-Lollipop/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/MrSmallLiu/g2plot-lollipop" />
  </a>
</p>

> Lollipop based on G2Plot v2

## Install

```sh
npm install --save g2plot-lollipop
```

## Usage

```js
import { Lollipop } from 'g2plot-lollipop'
const data = [
  {
    type: '家具家电',
    sales: 38,
  },
  {
    type: '粮油副食',
    sales: 52,
  },
  {
    type: '生鲜水果',
    sales: 61,
  },
  {
    type: '美容洗护',
    sales: 145,
  },
  {
    type: '母婴用品',
    sales: 48,
  },
  {
    type: '进口食品',
    sales: 38,
  },
  {
    type: '食品饮料',
    sales: 38,
  },
  {
    type: '家庭清洁',
    sales: 38,
  },
];
const lollipop =  new Lollipop('container',  {
    data,
    xField:'type',
    yField: 'sales',
    radiusRatio: 0.4
})
lollipop.render()
```

## Author

👤 **MrSmallLiu**

* Github: [@MrSmallLiu](https://github.com/MrSmallLiu)

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [MrSmallLiu](https://github.com/MrSmallLiu).<br />
This project is [MIT](https://github.com/MrSmallLiu/G2Plot-Lollipop/blob/master/LICENSE) licensed.