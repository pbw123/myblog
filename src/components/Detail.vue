<template>
	<div class="container">
	<div class="left">
		<div class="type">
			<span class="tip">您现在所在的位置是：</span>
			<span class="place">
				<span>首页</span>
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
					  <el-button type="danger" round class="word" size="medium">打赏</el-button>
				</div>
				<div class="praise">赞{{article.praise}}</div>
				<div class="scan">浏览{{article.scan}}</div>
			</div>
			
			<Comment :comments="coms" :msg="msg"></Comment>
			
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
	export default{
		data(){
			return {
				article:this.$route.params.article,
				msg:{
					count:45,
					kind:'评论'
				},
				coms:[
					{img:img5,name:'Joker',content:'这是文章评论内容',time:'2019-9-26 21:16'},
					{img:img5,name:'Joker',content:'这是文章评论内容',time:'2019-9-26 21:16'},
					{img:img5,name:'Joker',content:'这是文章评论内容',time:'2019-9-26 21:16'},
					{img:img5,name:'Joker',content:'这是文章评论内容',time:'2019-9-26 21:16'}
				]
			}
		},
		components:{
			Right,
			Comment
		}
		
	}
</script>

<style lang="scss" scoped>
	@import "@/components/scss/detail.scss"
</style>
