<template>
	<div class="right">
		<div class="attention">
			<div class="title">关注我</div>
			<div class="logo">
				<div class="item" v-for="(item,index) in contacts" :key="index">
					<div v-if="item.name==='公众号'">
						<el-tooltip placement="bottom" effect="light">
						  <div slot="content">
							  <img src="../imgs/gzh.jpg" style="width: 300px;">
						  </div>
						  <div>
							  <div class="icon">
							  	<img :src="item.img" alt="">
							  </div>
							  <div class="name">
							  	{{item.name}}
							  </div>
						  </div>
						</el-tooltip>
					</div>
					
					<div v-else>
						<a href="https:\\www.baidu.com">
							<div class="icon">
								<img :src="item.img" alt="">
							</div>
						</a>
						<div class="name">
							{{item.name}}
						</div>
					</div>
				</div>

			</div>
		</div>

		<div class="article">
			<div class="title">
				最新文章
			</div>
			<div class="article-list" v-for="(item,index) in lists" :key="index">
				<li>{{item.title}}</li>
			</div>
		</div>

		<div class="friend-link">
			<div class="title">
				友情链接
			</div>
			<div class="link-list">
				<span class="list-item" v-for="(item,index) in links" :key="index">
					<a :href="item.url">{{item.name}}</a>
				</span>

				<div style="clear:both;"></div>

			</div>
		</div>


	</div>
</template>

<script>
	const wechat = require('../imgs/wechat.png')
	const qq = require('../imgs/QQ.png')
	const weibo = require('../imgs/weibo.png')
	const csdn = require('../imgs/csdn.png')
	const github = require('../imgs/github.png')
	const gitee = require('../imgs/gitee2.png')
	const jianshu = require('../imgs/jianshu3.png')
	const juejin = require('../imgs/juejin2.png')
	export default {
		data() {
			return {
				lists: [{
						title: '活着'
					},
					{
						title: '平凡的世界'
					},
					{
						title: '楚门的世界'
					},
					{
						title: '陈二狗的妖孽人生'
					},
					{
						title: '百年孤独'
					},
					{
						title: '老人与海'
					}

				],
				contacts: [{
						img: wechat,
						name: '公众号'
					},
					
					{
						img: qq,
						name: 'QQ'
					},
					{
						img: weibo,
						name: '微博'
					},
					{
						img: csdn,
						name: 'CSDN'
					},
					{
						img: jianshu,
						name: '简书'
					},
					{
						img: juejin,
						name: '掘金'
					},
					{
						img: github,
						name: 'github'
					},
					{
						img: gitee,
						name: '码云'
					}
				],
				links: [{
						name: '百度',
						url: 'https://www.baidu.com'
					},
					{
						name: '阿里巴巴',
						url: 'https://www.baidu.com'
					},
					{
						name: '华为',
						url: 'https://www.baidu.com'
					},
					{
						name: '华为',
						url: 'https://www.baidu.com'
					},
					{
						name: '华为',
						url: 'https://www.baidu.com'
					},
					{
						name: '美团',
						url: 'https://www.baidu.com'
					}
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "@/components/scss/right.scss"
</style>
