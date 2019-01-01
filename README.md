# CokoUI 一个Vue UI 组件

[![Build Status](https://travis-ci.org/a379351939/coko-UI.svg?branch=master)](https://travis-ci.org/a379351939/gulu-demo)

## 介绍

做个UI框架学习Vue。
- [官方文档](https://a379351939.github.io/coko-UI/)

## 开始使用

1 .安装 coko-ui
    ```
    npm i --save coko-ui
    ```   
2 .引入 coko-ui
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

