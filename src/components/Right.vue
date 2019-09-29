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
						img: csdn,
						name: 'CSDN'
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
						img: wechat,
						name: '简书'
					},
					{
						img: wechat,
						name: 'CSDN'
					},
					{
						img: wechat,
						name: '微信'
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
	.title {
		font-size: 25px;
		border-bottom: 1.5px solid gainsboro;
		padding-bottom: 10px;
		margin-bottom: 30px;
	}

	.right {
		display: flex;
		flex-direction: column;
		background-color: rgb(255, 251, 240);

		.logo {
			display: grid;
			grid-template-columns: repeat(4, 25%);
			grid-template-rows:90px 90px;
			margin-top: 10px;

			.item {
			
				.icon {
					width: 100%;
					justify-content: center;
					display: flex;
					
					

					img {
						width: 70%;
						height: 70%;
						
						&:hover{
							opacity: 0.3;
						}
					}
				}

				.name {
					display: flex;
					justify-content: center;
					font-size: 14px;
					color: rgb(116, 127, 140);
					margin-top: 6px;
				}

			}
		}

		.article {
			margin-top: 50px;
			height: 300px;

			.article-list {

				li {
					line-height: 35px;

					font: {
						size: 18px;
					}

					color: rgb(51, 51, 51);
				}
			}
		}

		.friend-link {
			margin-top: 20px;

			.link-list {

				width: 98%;
				min-height: 100px;
				border: 1px solid gainsboro;
				background-color: rgb(255, 255, 255);
				margin: 10px auto;

				.list-item {
					float: left;
					margin: 10px;
					font-size: 20px;
					white-space: nowrap;

					a {
						text-decoration: none;
						color: rgb(102, 102, 102);
					}
				}
			}
		}

	}
</style>
