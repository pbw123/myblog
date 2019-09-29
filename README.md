## 2019-09-23
***
用Vue CLI3搭建了的项目的基本结构，将代码推送到远程，遇到的问题主要有两个


1。vue中import引入模块路径中@符号是什么意思？

![](https://user-gold-cdn.xitu.io/2019/9/23/16d5e68a44c6f252?w=830&h=136&f=png&s=19066)

@ 等价于 /src 这个目录，避免写麻烦又易错的相对路径

2。使用sass语法需要安装sass-loader、node-sass

![](https://user-gold-cdn.xitu.io/2019/9/23/16d5e7b109908cc5?w=536&h=110&f=png&s=8643)
sass-loader是css预处理器，可以在CLI创建项目的时候安装，也可以项目创建完成后手动安装
[参考链接](https://majing.io/posts/10000017191170)

## 9-24
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

## 9-25
***
遇到的问题主要有

1。引入轮播图片

在模板中这样是没问题的：


```
<img src="../../imgs/c3.png" />
```
但是我把地址提取出来，放到 data 里，就引用不到了：


```
<img :src="img3" >
```


```
export default {
data() {
	return {
              img3: '../../imgs/c3.png'
            }
     }
}
```
解决办法

1）写在模板不出错，是因为你已经有模板的图片解析器了，在JS中需要import

2）放在模版里是会被 webpack 打包出来，所以可以。
而在 js 里写图片路径其实只是字符串 webpack 不会处理
如果想这么做 你可以把图片放在最外层的 static 文件夹
或使用 import 、require 引入

```
import img3 from '../../imgs/c3.png'
```
或
```
const img3=require('../../imgs/c3.png')
```

在data里引用变量
```
export default {
data() {
	return {
              img3:img3
            }
     }
}
```
在模板里直接引入路径打包编辑出来是这样的

![](https://user-gold-cdn.xitu.io/2019/9/25/16d67b5cadbf1528?w=729&h=35&f=png&s=11407)
而在data中没有经过import或require引入直接写路径的，打包出来是这样的

![](https://user-gold-cdn.xitu.io/2019/9/25/16d67b83b0843f6a?w=688&h=47&f=png&s=10935)
[参考链接](https://segmentfault.com/q/1010000007930232)



2。项目的友情链接这里遇到两个问题
![](https://user-gold-cdn.xitu.io/2019/9/25/16d67d0da39ba323?w=527&h=249&f=png&s=15244)
1）自动换行

数字或者英文超出规定区域不会自动换行，而中文会。
若要实现英文或数据也会自动换行，则span标签需要添加属性**word-wrap:break-word;** 中文想实现不自动换行则添加属性**white-space: nowrap;** 

2）
使用float浮动时，当元素一行排不下了会自动排到下一行，但并不会撑大容器的高度，这里的解决办法是额外标签清除浮动

```
<div style="clear:both;"></div>
```
[参考链接](https://www.cnblogs.com/top5/archive/2009/09/08/1562240.html)

## 9-26
***
我说为什么在App.vue的body标签的不起作用呢，原来是用scoped指定了只在当前组件有效

![](https://user-gold-cdn.xitu.io/2019/9/26/16d6b2124706389f?w=833&h=287&f=png&s=29676)

运行页面没有问题，但控件台却有报错

![](https://user-gold-cdn.xitu.io/2019/9/26/16d6b603ee0475b3?w=1157&h=302&f=png&s=47028)
对应代码

![](https://user-gold-cdn.xitu.io/2019/9/26/16d6b60ecb588cc9?w=1137&h=59&f=png&s=11348)
解决后代码

![](https://user-gold-cdn.xitu.io/2019/9/26/16d6b61c96c077aa?w=1234&h=40&f=png&s=11653)
把key改成唯一值就可以了

2。组件传参
https://segmentfault.com/a/1190000012393587?utm_source=tag-newest

3。取消文本输入框边框和鼠标点入后默认的颜色

```
outline: none;
border: none;
```
**今日总结**

今天基本在宿舍写了一天的代码，初步完成了所有文章和留言页面的布局和样式。由于对代码掌握的还不熟练，基础不够扎实。遇到的很多的问题当解决之后就发现挺基础的。App.vue并不是只能放&lt;router-view>&lt;/router-view>,之前就是错误的认为是只能通过该标签访问路径为/的路由，所示建了一个Nav.vue作为一级路由，导航栏为一级路由，通过导航跳转的页面就都是二级路由了。然后今天看了之前的学习代码，导航条可以放在App.vue，即Nav.vue的代码放到了App.vue，再修改一下路由表，原来的二级路由变成一级路由。删除掉Nav.vue。

接着在App.vue设置body改变背景色，没有生效，之前还好好的。还是哪以前的练习代码来测试，发现没问题，经多次检查发现是&lt;style>标签的scoped属性，scoped属性的作用是样式只在当前组件生效，之前习惯了但凡是组件都加上这个，这里去掉这个属性就好了。

右侧的组件“关注我”模块，之前只准备了4个栏位，采用了flex布局，今天想到今后可能要放更多图标，所示就用网络布局，设计了8个栏位，两行四列，如下代码

```
display: grid;
grid-template-columns: repeat(4, 25%);
grid-template-rows:90px 90px;
```
四个列宽就占25%，两个行高都是90px。

justify-content和align-items一样只在flex布局时生效，文本水平对齐的话用text-align，垂直居中的话可以设置行高line-height来实现。

linkActiveClass来指定路由导航激活状态的class名字，&lt;router-view>&lt;/router-view>上不需要添加这个class名

使用变量来引用属性值还挺方便的，当这个值多次需要用到且不易手写的时候。

```
$rgbcolor:rgb(231, 72, 81) !global 
```

border-radius可以有一到四个值，一个值是作用在四个角，两个值时：第一个值是左上角，第二个值是右上角。三个半径值分别表示：左上角  右上角和左下角   右下角。
四个半径值分别表示：左上角  右上角  右下角  左下角   （顺时针）；

border-radius:60px/40px;

注：这两个半径值分别代表是水平/垂直方向的半径

![](https://user-gold-cdn.xitu.io/2019/9/26/16d6e24fe62e3915?w=415&h=151&f=png&s=12841)

input标签和textarea输入框可以不要边框，属性是border:none;
鼠标点击进入时，可以不要边框默认产生有点蓝的颜色border: none;也可以在input:focus{}里指定border为其它值。设置其内边距光标会移动

min-width属性和width=100%的配合使用、使用element-ui的上传图片组件来上传头像等也费了一番周折

今天就到这吧。夜深人静，晚安！

## 9-27
***
路由跳转回到页面顶部，[官网](https://router.vuejs.org/zh/guide/advanced/scroll-behavior.html#%E5%BC%82%E6%AD%A5%E6%BB%9A%E5%8A%A8)

```
scrollBehavior (to, from, savedPosition) {
	  return { x: 0, y: 0 }
	}
```	
鼠标悬停变成小手cursor:pointer;

鼠标悬停显示图片，css实现思路是图片外层容器是相对定位，图片是绝对定位且display:none;当鼠标放上去使用伪类:hover，display变成block

然而element-ui提供了更好的实现方案，就是用Tooltip文字提示组件

```
用具名 slot 分发content，替代tooltip中的content属性。

<el-tooltip placement="top">
  <div slot="content">多行信息<br/>第二行信息</div>
  <el-button>Top center</el-button>
</el-tooltip>
```

引入scss文件

```
@import "@/components/scss/detail.scss"
```

路由传参

```
goDetail(val) {
this.$router.push({
name:'/Detail',
params:{
article:val
}
})
}
```
取参

```
article:this.$route.params.article
```
**今日总结**

完成了文章详情页面的基本布局和样式

![](https://user-gold-cdn.xitu.io/2019/9/27/16d73371f9adee0c?w=979&h=525&f=png&s=364967)
将昨天写的留言功能封装成一个组件，这样在文章的评论就可以直接复用，无需重复造轮子，文章详情是通过路由携带数据跳转进入的，有个问题是，当刷新该页面的时页面没有数据，控件台报错，这也在意料之中，这里的设计思路是当第一次通过路由跳转进入时，将数据保存起来(后面是否需要vuex)，当刷新页面的时候，再将保存的数据取出渲染到页面，如果保存的数据不存在了，再发起网络请求调用后台接口。这样的好处是减少网络请求，减少服务器开销。

## 9-28
***
innerHTML改变页面div元素
[参考](https://segmentfault.com/q/1010000016909014)，打赏功能用了这种方式

**今日总结**

打赏功能用element ui的弹框组件实现点击按钮弹出，再使用innerHTML来切换支付宝和微信的二维码，开始以为是用路由来实现的，结果以失败告终。到后面发现有更好的实现方式，就是使用绑定class来实现，在data中设置一个Boolear变量，通过点击按钮来改变布尔值，在:class中使用三元表达式来选择要渲染的样式，按钮的选中状态和未选中状态样式的切换就是通过这样来达到预期效果的。而通过display:none;就可以实现内容的显隐状态，还不会占用原来的位置。这样就能实现同一块地方，点击不同的按钮，显示的内容就不一样。注册登录间的切换就是这么来实现的。

登录注册用到了element ui的表单组件，表单组件里的表单校验也费了一波周折，空格输入也能通过效验，还好组件里提供了正则表达式，经过多次的尝最终也搞定了。评论组件再度封装，把用户输入要提交的评论内容(之前只封装了评论展现的模块)和注册登录也封装到评论组件里，这样留言页面和文章详情页面都可以直接引用，至此越发觉得vue的组件开发这一点真是太棒了，提高性能暂且不说，主要是方便偷懒，能复制粘贴的就不要自己写，能直接引用的就绝不复制粘贴，我相信这是绝大多数开发人员的内心诉求，哈哈哈哈

![](https://user-gold-cdn.xitu.io/2019/9/28/16d7881dd5483a0a?w=966&h=738&f=gif&s=5184448)

![](https://user-gold-cdn.xitu.io/2019/9/28/16d7883efdd31d0e?w=908&h=679&f=png&s=152955)

9-29
***
**今日总结**

因为大部分功能都有了，今基本没有添加什么额外的功能，主要就是处理一些细节。使用阿里云的图标库给页面添加图标，添加了限制评论输入框字数上限功能，这里还是被卡了一会儿，结合输入框元素(input或textarea)自带的maxLength属性和vue的watch来监听属性值变化，当然实现方式很多，我使用了自己觉得最简单的一种，灵感来源于下面这段代码

```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>Examples</title>
<meta name="description" content="">
<meta name="keywords" content="">
<link href="" rel="stylesheet">
<script src="https://cdn.bootcss.com/vue/2.4.2/vue.min.js"></script>
</head>
<body>
    <div id="app">
        <input type="text" v-model="items.text" ref="count"/>
        <div  v-html="number"></div>
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                number: '100',
                items: {
                    text:'',
                },
            },
            watch:{   //watch()监听某个值（双向绑定）的变化，从而达到change事件监听的效果
                items:{
                    handler:function(){
                        var _this = this;
                        var _sum = 100; //字体限制为100个
                        _this.$refs.count.setAttribute("maxlength",_sum);
                        _this.number= _sum- _this.$refs.count.value.length;
                    },
                    deep:true
                }
            }
        })
    </script>
</body>
</html>

 - handle就是你watch中需要具体执行的方法
 - deep：就是你需要监听的数据的深度，一般用来监听对象中某个属性的变化
 - immediate：在选项参数中指定 immediate: true 将立即以表达式的当前值触发回调
```
不过我觉得我的更简单，代码更少，如下

```、
<template>
<div class="comment-content">
<textarea class="" placeholder="既然来了,就说几句吧" v-model="textarea" :maxlength="maxLength"></textarea>
<div class="len">您还可以输入{{len}}个字</div>
</div>
</template>
<script>
export default {
		data() {
			return {
				textarea:'',
				maxLength:150,
				len:150
			}
		},
		watch:{
			textarea(){
					  this.len=this.maxLength - this.textarea.length
			}
		}
	}
</script>
```
实现的效果如下

![](https://user-gold-cdn.xitu.io/2019/9/29/16d7d8a7fdfcff15?w=1105&h=402&f=png&s=43623)
当然，这里其它代码、样式都没有贴出来

其次就是解决了之前留下来的问题：从文章列表通过路由携带数据跳转到文章详细页面可以正常渲染数据，但是当强制刷新浏览器的时候，数据消失，控制台报属性未定义的错误。在解决这个问题的过程中遇到的问题首先是对localStorage的使用并熟练，毕竟自己第一次用，之前倒是看到别人用过,下面就是我目前了解到的

对浏览器来说，使用 Web Storage 存储键值对比存储 Cookie 方式更直观，而且容量更大，它包含两种：localStorage 和 sessionStorage。
注意:sessionStorage 和 localStorage 的用法基本一致，引用类型的值要转换成JSON（JSON.stringify()）,相应的取出来需要解析JSON.parse()，这里就只列举localStorage

**保存**
```
//对象
const info = { name: 'hou', age: 24, id: '001' };
//字符串
const str="haha";
localStorage.setItem('hou', JSON.stringify(info));
localStorage.setItem('zheng', str);
```
**获取**
```
var data1 = JSON.parse(localStorage.getItem('hou'));
var data2 = localStorage.getItem('zheng');
```
**删除**
```
/删除某个
localStorage.removeItem('hou');
//删除所有
localStorage.clear();
```
**浏览器中查看**
![](https://user-gold-cdn.xitu.io/2019/9/29/16d7d9f7d37a0745?w=751&h=336&f=png&s=44995)

localStorage有效期是永久的。一般的浏览器能存储的是5MB左右。sessionStorage api与localStorage相同。
sessionStorage默认的有效期是浏览器的会话时间（也就是说标签页关闭后就消失了）。
localStorage作用域是协议、主机名、端口。（理论上，不人为的删除，一直存在设备中）
sessionStorage作用域是窗口、协议、主机名、端口。

知道了这些知识点后，你的问题就很好解决了。
localStorage是window上的。所以不需要写this.localStorage，vue中如果写this，是指vue实例。会报错

[参考](https://www.cnblogs.com/houzheng/p/9067110.html)

2）localStorage的使用问题解决了，那么接下来要怎么做呢，其实实现思路挺简单的，只是我一开始没有想到而已
在methods中定义一个方法

```
methods{{
setArticleData() {
var is = this.$route.params.article === undefined
if (is) {
console.log(is+'以后走的if是这里')
var d=JSON.parse(localStorage.getItem('data'))
console.log(d)
this.article = d
} else {
console.log(is+'第一次路由进来走的else是这里')
this.article = this.$route.params.article
localStorage.setItem('data',JSON.stringify(this.$route.params.article))
	}
}			
}
```
放入到mounted()或created(),这两个是vue的生命周期函数，vue实例被创建时就会自动执行

```
created() {
this.setArticleData();
}
```
这段代码应该很好理解，不需要再做过多的解释，一切尽在代码中
