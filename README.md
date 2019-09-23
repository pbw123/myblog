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

