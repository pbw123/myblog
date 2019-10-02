<template>
	<div class="article">
		<div class="type">
			{{type}}
		</div>
		<div class="article-list">
			<div class="article-item" v-for="item in articles" :key="item.id" @click="goDetail(item)">
				<div class="left">
					<img :src="item.img" />
				</div>
				<div class="right">
					<div class="title">
						{{item.title}}
					</div>
					<div class="content">
						{{item.content}}
					</div>
					<div class="messages">
						<div class="msg-left">
							<li class="user-icon">
							<div class="icon "><img src="../imgs/user2.png"></div>
							<div class="word">{{item.author}}</div>
							</li>
							<li>
							<div class="icon"><img src="../imgs/time2.png"></div>
							<div class="word">{{item.time}}</div>
							</li>
						</div>
						<div class="msg-right">
							<li>
							<div class="icon" ><img src="../imgs/praise.png"></div>
							<div class="word"><span>点赞</span>({{item.praise}})</div>
							</li>
							<li>
							<div class="icon"><img src="../imgs/eye2.png"></div>
							<div class="word"><span>浏览</span>({{item.scan}})</div>
							</li>
							<li>
							<div class="icon"><img src="../imgs/comment2.png"></div>
							<div class="word"><span>评论</span>({{item.comment}})</div>
							</li>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	const img1 = require('../imgs/c5.png')
	export default {
		props: {
			type: String,
			isNight:Boolean
		},
		data() {
			return {
				articles: [{
						id: 1,
						title: '这是文章标题',
						content: '最近吃辅食孩子肠胃不消化，天天研究孩子的粑粑，我闻一遍我老公闻一遍，观察粑粑的状态，成分，是否有粘液，是否有蔬菜残留物，是否有未消化的高铁，妈呀，真是养儿方知父母恩，作为新手妈妈，我的内心总是处于惶恐焦虑的状态。孩子',
						author: 'Joker',
						time: '2019-9-25 15:48',
						scan: 99,
						praise: 88,
						comment: 9,
						img: img1
					},
					{
						id: 2,
						title: '这是文章标题',
						content: '最近吃辅食孩子肠胃不消化，天天研究孩子的粑粑，我闻一遍我老公闻一遍，观察粑粑的状态，成分，是否有粘液，是否有蔬菜残留物，是否有未消化的高铁，妈呀，真是养儿方知父母恩，作为新手妈妈，我的内心总是处于惶恐焦虑的状态。孩子',
						author: 'Joker',
						time: '2019-9-25 15:48',
						scan: 99,
						praise: 88,
						comment: 9,
						img: img1
					},
					{
						id: 3,
						title: '这是文章标题',
						content: '最近吃辅食孩子肠胃不消化，天天研究孩子的粑粑，我闻一遍我老公闻一遍，观察粑粑的状态，成分，是否有粘液，是否有蔬菜残留物，是否有未消化的高铁，妈呀，真是养儿方知父母恩，作为新手妈妈，我的内心总是处于惶恐焦虑的状态。孩子',
						author: 'Joker',
						time: '2019-9-25 15:48',
						scan: 99,
						praise: 88,
						comment: 9,
						img: img1
					},
					{
						id: 4,
						title: '这是文章标题',
						content: '最近吃辅食孩子肠胃不消化，天天研究孩子的粑粑，我闻一遍我老公闻一遍，观察粑粑的状态，成分，是否有粘液，是否有蔬菜残留物，是否有未消化的高铁，妈呀，真是养儿方知父母恩，作为新手妈妈，我的内心总是处于惶恐焦虑的状态。孩子',
						author: 'Joker',
						time: '2019-9-25 15:48',
						scan: 99,
						praise: 88,
						comment: 9,
						img: img1
					},
				]
			}
		},
		methods: {
			goDetail(val) {
				this.$router.push({
					name:'/Detail',
					params:{
						article:val,
						isNight:this.isNight
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	@media screen and (min-width:500px){
		@import "@/components/scss/article.scss"
	}
	@media screen and (max-width:500px){
		@import "@/components/scss/article-mobile.scss"
	}
</style>
