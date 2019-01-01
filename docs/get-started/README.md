---
title: 快速开始
---

# 按需引用
在 webpack 入口页面 main.js 中如下配置：

```
import Vue from 'vue'
import {Button, Group, Icon} from  'coko-ui'
import 'coko-ui/dist/index.css'
import plugin from './plugin'

Vue.use(plugin)
Vue.component('c-button', Button)
Vue.component('c-icon', Icon)
Vue.component('c-group', ButtonGroup)
``` 

需要导入样式，即在 main.js 或根组件执行 
```
import 'coko-ui/dist/index.css'
```