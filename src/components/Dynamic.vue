<template>
	<div class="home">
		<div class="left">
		 
		 <div class="article">
			 <Article type="所有文章" :isNight="$route.query.isNight"></Article>
		 </div>
			  
		</div>
		<div class="right">
			<Right></Right>
		</div>
		
	</div>
</template>

<script>
	import Right from '@/components/Right.vue'
	import Article from '@/components/Article.vue'
	const img1=require('../imgs/c1.png')
	const img2=require('../imgs/c2.png')
	const img3=require('../imgs/c3.png')
	const img4=require('../imgs/c4.png')
	export default {
		name: 'home',
		components: {
			Right,
			Article
		},
		data() {
			return {
				imgs:[
					{url:img1},
					{url:img2},
					{url:img3},
					{url:img4}
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	@media screen and (min-width:500px){
		.home {
			width: 80%;
			margin: 25px auto;
			display: flex;
		
			.left {
				flex: 0 0 70%;
		     margin-right: 30px;
			}
		
			.right {
				width: 350px;
			}
		}
	}
	@media screen and (max-width:500px){
		
		.right {
			margin-top: -20px;
		}
	}
	
</style>
