# CokoUI 一个Vue UI 组件

[![Build Status](https://travis-ci.org/a379351939/gulu-demo.svg?branch=master)](https://travis-ci.org/a379351939/gulu-demo)

## 介绍

学习vue过程中做个的一个 UI 框架。
- [官方文档](https://a379351939.github.io/coko-UI/)

## 开始使用

1. 安装

使用框架前，在CSS中开启 border-box 
    ```
    *,*::before,*::after{box-sizing: border-box;}
    ```

2 .安装 coko-ui
    ```
    npm i --save coko-ui
    ```   
3 .引入 coko-ui
    ```
    import {Button, Group, Icon} from  'coko-ui'
    
    export default {
      components: {
        'c-button': Button,
        'c-icon': Icon,
        'c-group': Group
      }
    }
    ``` 

