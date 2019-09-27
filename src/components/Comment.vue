<template>
	<div>
		<div class="comment-bar">
			<div class="bar-left">{{msg.kind}}</div>
			<div class="bar-right">
				<span class="count">{{msg.count}}</span>
				<span class="tiao">条{{msg.kind}}</span>
			</div>
		</div>
		
		<div class="comment-list">
			<div class="tip"></div>
			<div class="comment-item" v-for="(item,index) in comments" :key="index">
				<div class="item-left">
					<img :src="item.img" />
				</div>
				<div class="item-center">
					<div class="user-name">{{item.name}}</div>
					<div class="item content">{{item.content}}</div>
				</div>
				<div class="item-right">
					<div class="time">{{item.time}}</div>
					<div class="reply">回复</div>
				</div>
			</div>
		</div>
	</div>
	
</template>

<script>
	const img5 = require('../imgs/c5.png')
	export default{
		props:{
			comments:Array,
			msg:Object
		},
		
		data(){
			return {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	$rgbcolor:rgb(231, 72, 81) !global 
	.comment-bar{
		margin-top: 40px;
		display: flex;
		justify-content: space-between;
		.bar-left{
			width: 80px;
			line-height: 40px;
			text-align: center;
			color: $rgbcolor;
			border-top: 1.5px solid $rgbcolor;
			border-left: 1.5px solid $rgbcolor;
			border-right: 1.5px solid $rgbcolor;
			border-radius: 10px 10px 0px 0px;
		}
		
		.bar-right{
			border-bottom: 1.5px solid $rgbcolor;
			width: 100%;
			text-align: right;
			color: $rgbcolor;
			
			.count{
				font-size: 30px;
				font-weight: bold;
				font-family: "黑体";
			}
			.tiao{
				margin-left: 5px;
				font-size: 20px;
				font-weight: lighter;
			}
		}
	}
	.comment-list{
		.tip{
			
		}
		.comment-item{
			display: flex;
			margin-top: 40px;
			border-bottom: 1.5px dashed gainsboro;
			padding-bottom: 40px;
			
			.item-left{
				height: 60px;
				width: 60px;
				
				img{
					height: 100%;
					width: 100%;
					border-radius: 50%;
				}
			}
			.item-center{
				margin-left: 20px;
				display: flex;
				flex: 7;
				flex-direction: column;
				
				.user-name{
					
				}
				.content{
				margin-top: 14px;	
				}
			}
			
			.item-right{
				flex: 3;
				display: flex;
				flex-direction: column;
				
				.time{
					text-align: right;
				}
				
				.reply{
					text-align: right;
					margin-top: 70px;
				}
			}
		}
	}
</style>
