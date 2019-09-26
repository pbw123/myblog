<template>
	<div class="article">
		<div class="type">
			{{type}}
		</div>
		<div class="article-list" >
			<div class="article-item" v-for="item in articles" :key="item.id">
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
						<li style="color: rgb(161, 155, 8);">{{item.author}}</li>
						<li>{{item.time}}</li>
					</div>
					<div class="msg-right">
						<li>{{item.praise}}</li>
						<li>浏览({{item.scan}}）</li>
						<li>评论({{item.comment}}）</li>
					</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	const img1=require('../imgs/c5.png')
	export default{
		data(){
			return {
				type:'最新文章',
			articles:[
				{id:1,title:'这是文章标题',content:'最近吃辅食孩子肠胃不消化，天天研究孩子的粑粑，我闻一遍我老公闻一遍，观察粑粑的状态，成分，是否有粘液，是否有蔬菜残留物，是否有未消化的高铁，妈呀，真是养儿方知父母恩，作为新手妈妈，我的内心总是处于惶恐焦虑的状态。孩子',author:'Joker',time:'2019-9-25 15:48',scan:99,praise:88,comment:9,img:img1},
				{id:2,title:'这是文章标题',content:'最近吃辅食孩子肠胃不消化，天天研究孩子的粑粑，我闻一遍我老公闻一遍，观察粑粑的状态，成分，是否有粘液，是否有蔬菜残留物，是否有未消化的高铁，妈呀，真是养儿方知父母恩，作为新手妈妈，我的内心总是处于惶恐焦虑的状态。孩子',author:'Joker',time:'2019-9-25 15:48',scan:99,praise:88,comment:9,img:img1},
				{id:3,title:'这是文章标题',content:'最近吃辅食孩子肠胃不消化，天天研究孩子的粑粑，我闻一遍我老公闻一遍，观察粑粑的状态，成分，是否有粘液，是否有蔬菜残留物，是否有未消化的高铁，妈呀，真是养儿方知父母恩，作为新手妈妈，我的内心总是处于惶恐焦虑的状态。孩子',author:'Joker',time:'2019-9-25 15:48',scan:99,praise:88,comment:9,img:img1},
				{id:4,title:'这是文章标题',content:'最近吃辅食孩子肠胃不消化，天天研究孩子的粑粑，我闻一遍我老公闻一遍，观察粑粑的状态，成分，是否有粘液，是否有蔬菜残留物，是否有未消化的高铁，妈呀，真是养儿方知父母恩，作为新手妈妈，我的内心总是处于惶恐焦虑的状态。孩子',author:'Joker',time:'2019-9-25 15:48',scan:99,praise:88,comment:9,img:img1},
			]
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.article{
		margin-top: 50px;
		background: rgb(255, 251, 240);
		.type{
			font-size: 26px;
			font-family: "microsoft yahei";
			color: '#474645';
			font-weight: bold;
			border-bottom: 5px solid rgb(219, 109, 76);
			padding-bottom: 10px;
		}
		.article-list{
		
		
		.article-item{
			display: flex;
			height: 270px;
			align-items: center;
			border-bottom: 1.5px solid rgb(191, 171, 134);
			.left{
				width: 260px;
				height: 210px;
			}
			
			.right{
				display: flex;
				height: 210px;
				flex-direction: column;
				margin-left: 20px;
				.title{
					font-size: 26px;
					font-family: "microsoft yahei";
					color: '#474645';
					font-weight: bold;
				}
				.content{
					margin-top: 20px;
					height: 84px;
					line-height: 28px;
					font-weight: lighter;
					font-family: "行楷";
					width: 490px;
					color: rgb(119, 119, 119);
					font-size: 15px;
					overflow: hidden;
					
				}
				.messages{
					display: flex;
					flex-direction: row;
					width: 100%;
					justify-content: space-between;
					font-size: 16px;
					line-height: 60px;
					color: rgb(153, 153, 166);
					.msg-left{
						li{
							float: left;
							list-style: none;
							margin-right: 10px;
						}
					}
					
					.msg-right{
						li{
							float: right;
							list-style: none;
							margin-right: 10px;
						}
					}
				}
			}
			&:hover{
				background-color: white;
			}
		}	
		
		}
	}
	html,body{
		margin: 0;
		padding: 0;
		background: rgb(255, 251, 240);
	}
</style>
