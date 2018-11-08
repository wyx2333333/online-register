# 项目介绍

本项目用于实现简单的注册和激活功能，主要分为 web 端的在线注册获取注册码和代理端输入验证码产品激活。

# 项目结构

- bcm-util(工具类模块)
- bcm-db(数据库 SQL 模块)
- bcm-entity(数据库实体类、实体类对应的枚举模块)
- bcm-login(登录模块)
- bcm-register(注册激活功能模块)
- bcm-web(前端代码模块)
- bcm-main(系统入口主程序模块，包含：Spring Boot 启动类、整个系统的 Configuration、全局异常处理等)

# 项目环境

## 前端

- nodeJS
- nginx

## 后端

- jdk 1.8
- maven 3.5.4

# 技术栈

## 前端

- vue 2.x
- vue-cli 2.x
- vuex
- vue-router
- axios
- element-ui
- webpack

## 后端

- Spring Boot 2.0.5
- Mybatis 3.4.7
- Shiro 1.4.0
- Swagger 2.6.1
- Flyway

# 打包项目

## 编译前端工程(需要 nodeJS 环境)

- cd bcm-web
- npm i
- npm run build

## 打包后端工程

- 在项目根目录运行 mvn clean package -DskipTests

# 运行项目

- 在 bcm\bcm-login\target\ 目录下运行 java -jar bcm-login-0.0.1-SNAPSHOT.jar

# 其他规范

- restful API response 结构体：{ code:0, msg:'success', data{} }

# 自动化编译打包脚本

- register.sh
