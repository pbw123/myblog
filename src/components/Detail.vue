<template>
	<div class="container">
	<div class="left">
		<div class="type"></div>
		<div class="article-detail">
			<div class="top">
				<div class="title">{{article.title}}</div>
				<div class="msg">
					<div class="author">{{article.author}}</div>
					<div class="time">{{article.time}}</div>
				</div>
			</div>
			
			<div class="content">
				{{article.content}}
			</div>
			
			<div class="money">
				
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
	export default{
		data(){
			return {
				article:{
						id:1,
						title:'这是文章标题',
						content:'这是文章内容',
						time:'2019-9-27 12:49',
						praise:99,
						scan:565
				}
			}
		},
		components:{
			Right
		}
		
	}
</script>

<style lang="scss" scoped>
	.container{
		width: 80%;
		margin: 25px auto;
		display: flex;
		.left{
			flex: 0 0 70%;
			margin-right: 30px;
		}
		
		.right {
			width: 350px;
		}
	}
	
</style>
