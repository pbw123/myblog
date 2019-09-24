2019-09-23
***
用Vue CLI3搭建了的项目的基本结构，将代码推送到远程，遇到的问题主要有两个


1。vue中import引入模块路径中@符号是什么意思？

![](https://user-gold-cdn.xitu.io/2019/9/23/16d5e68a44c6f252?w=830&h=136&f=png&s=19066)

@ 等价于 /src 这个目录，避免写麻烦又易错的相对路径

2。使用sass语法需要安装sass-loader、node-sass

![](https://user-gold-cdn.xitu.io/2019/9/23/16d5e7b109908cc5?w=536&h=110&f=png&s=8643)
sass-loader是css预处理器，可以在CLI创建项目的时候安装，也可以项目创建完成后手动安装
[参考链接](https://majing.io/posts/10000017191170)

9-24
***
使用二级路由完成导航栏的开发

![](https://user-gold-cdn.xitu.io/2019/9/24/16d637ddb24c3f24?w=1920&h=476&f=png&s=688626)
主要遇到问题有

1。导航栏组件跟浏览器的上、左右间留有空白

![](https://user-gold-cdn.xitu.io/2019/9/24/16d623fcec41a0db?w=960&h=159&f=png&s=14278)
解决办法是在App.vue设置body的内边距和外边距为0

```
body{
	margin: 0;
	padding: 0;
}
```
2.如何适配手机屏幕
[参考链接](http://www.ruanyifeng.com/blog/2012/05/responsive_web_design.html)

3。css如何垂直居中

方法不唯一，这里使用flex布局，加上**align-items: center;** 属性

水平居中使用了**justify-content: center;** 属性

```
display: flex;
align-items: center;
justify-content: center;
```
这段代码可以让元素水平和垂直方向都居中

![](https://user-gold-cdn.xitu.io/2019/9/24/16d6378522819501?w=190&h=77&f=png&s=2053)