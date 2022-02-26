<template>
	<div class="container">
		<div class="left">
			<div class="type">
				<span class="tip">您现在所在的位置是：</span>
				<span class="place">
					<span @click="goHome()">首页</span>
					<span>></span>
					<span>文章详情</span>
					<span>></span>
				</span>
			</div>
			<div class="article-detail">
				<div class="title">{{article.title}}</div>
				<div class="msg">
					<div class="author author2">
						<div v-show="!isNight" class="icon"><img src="../imgs/user2.png" alt=""></div>
						<div v-show="isNight" class="icon"><img src="../imgs/user.png" alt=""></div>
						<div class="word">{{article.author}}</div>
					</div>
					<div class="author">
						<div v-show="!isNight" class="icon"><img src="../imgs/calendar.png" alt=""></div>
						<div v-show="isNight" class="icon"><img src="../imgs/rl.png" alt=""></div>
						<div class="word">{{article.time}}</div>
					</div>
				</div>

				<div class="content">
					{{article.content}}
				</div>

				<div class="money">
					<div class="reward">
						<el-popover placement="top" width="320" trigger="click">
							<div class="model">
								<div class="btn" style="display: flex;justify-content: center;">
									<div style="line-height: 50px;text-align: center;" id="btn1" @click="btn1" :class="[ btn1Active ? active : defaultClass]">
										微信
									</div>
									<div style="line-height: 50px;text-align: center;" id="btn2" @click="btn2" :class="[ btn2Active ? active : defaultClass]">
										支付宝
									</div>
								</div>
								<div id="div1">
									<img src="../imgs/gzh.jpg" style="width: 300px;" />
								</div>
							</div>
							<el-button slot="reference" type="danger" round class="word" size="medium">打赏</el-button>
						</el-popover>

					</div>
					<div class="praise info">
						<div class="icon">
							<img v-show="!isNight" src="../imgs/praise.png" alt="">
							<img v-show="isNight" src="../imgs/zan.png" alt="">
						</div>
						<div class="word">
							点赞({{article.praise}}）
						</div>
					</div>
					<div class="scan info">
						<div class="icon" style="padding-top: 3px;">
							<img v-show="!isNight" src="../imgs/eye2.png" alt="">
							<img v-show="isNight" src="../imgs/eye.png" alt="">
						</div>
						<div class="word">
							浏览({{article.scan}}）
						</div>
					</div>
				</div>
				<div class="com">
					<Comment :comments="coms" :msg="msg" :isNight="$route.params.isNight"></Comment>
				</div>
			</div>
		</div>

		<div class="right">
			<Right></Right>
		</div>
	</div>
</template>

<script>
	import Right from '@/components/Right.vue'
	import Comment from '@/components/Comment.vue'
  import {getAllMessage} from "../api/requestApi";
	const img5 = require('../imgs/c5.png')
	export default {
		data() {
			return {
				isOne: 1,
				// article:JSON.parse(localStorage.getItem('data')),
				article: {},
				isNight:false,
				msg: {
					count: 45,
					kind: '评论'
				},
				coms: [{
						img: img5,
						name: 'Joker',
						content: '这是文章评论内容这是文章评论内容这是文章评论内容这是文章这是文章评论内容这是文章评论内容这是文章评论内容这是文章评论内容这是文章评论内容这是文章评论内容这是文章评论内容评论内容这是文章评论内容',
						time: '2019-9-26 21:16'
					},
					{
						img: img5,
						name: 'Joker',
						content: '这是文章评论内容这是文章评论内容这是文章评论内容这是文章评论内容',
						time: '2019-9-26 21:16'
					},
					{
						img: img5,
						name: 'Joker',
						content: '这是文章评论内容',
						time: '2019-9-26 21:16'
					},
					{
						img: img5,
						name: 'Joker',
						content: '这是文章评论内容',
						time: '2019-9-26 21:16'
					}
				],
				btn1Active: true,
				btn2Active: false,
				defaultClass: 'defaultClass',
				active: 'active'

			}
		},
		components: {
			Right,
			Comment
		},
		created() {
			this.setArticleData();
		},
    mounted() {
		  this.getAllMessage()
    },
    methods: {
      getAllMessage() {
        getAllMessage().then(res => {
          this.coms=res.data
        });
      },
			btn1() {
				div1.innerHTML = '<img src="/img/gzh.9664391d.jpg" style="width:300px" />';
				this.btn1Active = true
				this.btn2Active = false
			},
			btn2() {
				div1.innerHTML = '<img src="https://static.yezismile.com/sun/images/weichat.jpg" style="width:300px" />';
				this.btn2Active = true
				this.btn1Active = false
			},
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
					this.isNight=this.$route.params.isNight
					localStorage.setItem('data',JSON.stringify(this.$route.params.article))
				}
			},
			goHome(){
				this.$router.push('/home')
			}
		}

	}
</script>

<style lang="scss" scoped>
	@media screen and (min-width:500px){
		@import "@/components/scss/detail.scss"
	}
	@media screen and (max-width:500px) {
	@import "@/components/scss/detail-mobile.scss"	
	}
</style>
