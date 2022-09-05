<div align="center">
  <img src="https://raw.githubusercontent.com/ndoras/ndora/main/doc/logo/logo-black.png" width="155"/>
</div>
<div align="center">
  <h1 align="center">NDORA</h1>
  <p align="center">Notify, Deploy Once, Run Anywhere. 一次部署，到处运行的聚合通知。</p>
  <p align="center">
    <a href="https://github.com/ndoras/ndora"><img src="https://img.shields.io/github/stars/ndoras/ndora" /></a>
    <a href="https://github.com/ndoras/ndora"><img src="https://img.shields.io/github/license/ndoras/ndora"></a>
    <a href="https://github.com/ndoras/ndora"><img src="https://img.shields.io/github/languages/top/ndoras/ndora"></a>
    <a href="https://hub.docker.com/r/ndoras/ndora"><img src="https://img.shields.io/docker/pulls/ndoras/ndora.svg" /></a>
    <a href="https://hub.docker.com/r/ndoras/ndora"><img src="https://img.shields.io/docker/image-size/ndoras/ndora" /></a>
  </p>
</div>
<hr/>

## 交流群组
<p>QQ: </p>

## 文档

+ 部署文档

## 使用

```shell
docker run -d \
  --name ndora \
  -v /root/ndora:/ndora\
  -p 8081:8081 \
  -e TZ=Asia/Shanghai \
  ndoras/ndora:stable
```

## 功能预览
## 开发

依赖要求：
+ node >= 14

```shell
$ git clone https://github.com/ndoras/ndora.git
$ cd ndora && npm i
$ npm run dev
```
打开浏览器: `http://127.0.0.1:8081`

## 

