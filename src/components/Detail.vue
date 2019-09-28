<template>
	<div class="container">
		<div class="left">
			<div class="type">
				<span class="tip">您现在所在的位置是：</span>
				<span class="place">
					<router-link to="/home" style="text-decoration: none;color: rgb(0, 0, 77);">首页</router-link>
					<span>></span>
					<span>文章详情</span>
					<span>></span>
				</span>
			</div>
			<div class="article-detail">
				<div class="title">{{article.title}}</div>
				<div class="msg">
					<div class="author">{{article.author}}</div>
					<div class="time">{{article.time}}</div>
				</div>

				<div class="content">
					{{article.content}}
				</div>

				<div class="money">
					<div class="reward">
						<el-popover placement="left" width="370" trigger="click">
								<div class="model">
									<div class="btn" style="display: flex;justify-content: center;">
										<div  style="line-height: 50px;text-align: center;" id="btn1" @click="btn1" :class="[ btn1Active ? active : defaultClass]">
											微信
											</div>
										<div style="line-height: 50px;text-align: center;" id="btn2" @click="btn2" :class="[ btn2Active ? active : defaultClass]">
											支付宝
											</div>
									</div>
									<div id="div1">
										<img src="../imgs/gzh.jpg" style="width: 350px;" />
									</div>
								</div>
							<el-button slot="reference" type="danger" round class="word" size="medium">打赏</el-button>
						</el-popover>

					</div>
					<div class="praise info">赞{{article.praise}}</div>
					<div class="scan info">浏览{{article.scan}}</div>
				</div>

				<div class="com">
					<Comment :comments="coms" :msg="msg"></Comment>
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
	const img5 = require('../imgs/c5.png')
	export default {
		data() {
			return {
				article: this.$route.params.article,
				msg: {
					count: 45,
					kind: '评论'
				},
				coms: [{
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
				btn1Active:true,
				btn2Active:false,
				defaultClass:'defaultClass',
				active:'active'
				
			}
		},
		components: {
			Right,
			Comment
		},
		methods: {
			btn1() {
				div1.innerHTML = '<img src="/img/gzh.9664391d.jpg" style="width:350px" />';
				this.btn1Active=true
				this.btn2Active=false
			},
			btn2() {
				div1.innerHTML = '<img src="https://static.yezismile.com/sun/images/weichat.jpg" style="width:350px" />';
				this.btn2Active=true
				this.btn1Active=false
			}
		}

	}
</script>

<style lang="scss" scoped>
	@import "@/components/scss/detail.scss"
</style>
