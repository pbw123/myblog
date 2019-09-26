<template>
	<div class="home">
		<div class="left">
         <div class="carousel">
			 <el-carousel>
			   <el-carousel-item v-for="item in imgs" :key="item.url">
			     <img :src="item.url" />
			   </el-carousel-item>
			 </el-carousel>
		 </div>
		 
		 <div class="article">
			 <Article></Article>
		 </div>
			  
		</div>
		<div class="right">
			<right1></right1>
		</div>
		
	</div>
</template>

<script>
	import Right1 from '@/components/Right1.vue'
	import Article from '@/components/Article.vue'
	const img1=require('../imgs/c1.png')
	const img2=require('../imgs/c2.png')
	const img3=require('../imgs/c3.png')
	const img4=require('../imgs/c4.png')
	export default {
		name: 'home',
		components: {
			Right1,
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
	.el-carousel__item h3 {
		color: #475669;
		font-size: 18px;
		opacity: 0.75;
		line-height: 300px;
		margin: 0;
	}


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

	body{
		margin: 0;
		padding: 0;
		background: rgb(255, 251, 240);
	}
</style>
