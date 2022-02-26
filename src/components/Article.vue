<template>
	<div class="article">
		<div class="type">
			{{type}}
		</div>
		<div class="article-list">
			<div class="article-item" v-for="item in articles" :key="item.id" @click="goDetail(item)">
				<div class="left">
					<img :src="item.aImg" />
				</div>
				<div class="right">
					<div class="title">
						{{item.aTitle}}
					</div>
					<div class="content">
						{{item.aContent}}
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
	import {articleList} from "../api/requestApi";

  const img1 = require('../imgs/c5.png')
	export default {
		props: {
			type: String,
			isNight:Boolean
		},
		data() {
			return {
				articles: []
			}
		},
    mounted() {
		  this.listArticles()
    },
    methods: {
      listArticles() {
        articleList().then(res => {
          this.articles=res.data
        });
      },
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
