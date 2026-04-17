# node-resume-server
Node.js 局域网简历服务器 | 个人简历Web展示项目

## 项目介绍
使用 Node.js 原生 http 模块搭建 Web 服务器，实现局域网访问个人简历，支持路由分发、404 页面、JSON 接口返回。

## 核心功能
1. 访问 / 或 /home 展示 HTML 个人简历
2. 访问 /project 返回项目列表 JSON 数据
3. 未知路径返回 404 页面
4. 支持公司/家庭局域网内所有设备访问

## 技术栈
Node.js | http模块 | fs文件系统 | path路径模块

## 使用方法
1. 安装 Node.js 环境
2. 启动服务：node index.js
3. 本地访问：http://127.0.0.1:8080
4. 局域网访问：http://你的IP:8080
