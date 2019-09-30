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
				srcList: [
				  'http://img3.imgtn.bdimg.com/it/u=2579838268,1716293199&fm=26&gp=0.jpg',
				  'https://c-ssl.duitang.com/uploads/item/201701/11/20170111181351_U2Z8C.thumb.700_0.jpeg'
				],
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
	@media screen and (min-width:500px){
		@import "@/components/scss/home.scss"
	}
	
	@media screen and (max-width:500px){
		@import "@/components/scss/home-mobile.scss"
	}
</style>
