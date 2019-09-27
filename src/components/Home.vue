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
				<Article type="最新文章"></Article>
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
	const img1 = require('../imgs/c1.png')
	const img2 = require('../imgs/c2.png')
	const img3 = require('../imgs/c3.png')
	const img4 = require('../imgs/c4.png')
	export default {
		name: 'home',
		components: {
			Right,
			Article
		},
		data() {
			return {
				imgs: [{
						url: img1
					},
					{
						url: img2
					},
					{
						url: img3
					},
					{
						url: img4
					}
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
			
			.carousel{
				margin-bottom: 50px;
			}
		}

		.right {
			width: 350px;
		}
	}

</style>
