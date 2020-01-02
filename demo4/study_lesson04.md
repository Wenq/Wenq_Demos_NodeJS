<!--
 * @Descripttion: 
 * @version: 
 * @Author: wenq
 * @Date: 2020-01-01 19:55:03
 * @LastEditors  : wenq
 * @LastEditTime : 2020-01-02 22:44:31
 -->
# nodeJS NPM 使用介绍

1.npm作用？
  从服务器下载第三方包、从服务器下载命令行程序运行、上传发布程序或包。
2.查看npm安装版本号？
  npm -v
3.升级npm软件本身？
  npm install npm -g //更新全局安装的npm软件
4.npm命令安装模块+使用模块
  安装：npm install 包名称 //安装在本地node_modules目录中
  使用：var express = require('express') //通过require引入模块，无需指定第三方包路径
5.全局安装与本地安装
  npm install express //本地，在当前目录node_modules目录(没有会自动创建)
  npm install express -g //全局，全局npm包路径的node_modules目录下？
6.查看全局安装的所有包信息
  npm list -g
  npm list/ls //查看当前目录下所有包信息
7.查看特定模块版本号
  npm list 模块名称 //当前目录下的模块
  npm list 模块名称 -g  //全局目录下的模块 
8.使用package.json?
9.Package.json属性说明？
10.卸载模块
  npm uninstall 模块名称
11.更新模块
  npm update 模块名称
12.搜素模块
  npm search 模块名称  //?为什么要搜索，直接用‘npm list’查看不行吗
13.创建模块
  npm init //创建模块，package.json文件不可少
在npm资源库中注册用户？
  npm adduser
14.发布模块
  npm publish
15.npm包版本号？
16.npm常用命令
  npm update 模块名称
  npm cache clear //清空npm本地缓存
  npm unpublish 模块名称@版本号 //撤销发布某个版本
  npm publish //?发布模块
17.使用淘宝npm镜像
  国内用npm慢，可用淘宝npm镜像代替。每隔10分钟，会与官方npm同步一次。
用淘宝定制cnpm命令行工具代替默认npm：
  npm install -g cnpm --registry=https://registry.npm.taobao.org
之后可用cnpm安装模块：
  cnpm install 模块名称
