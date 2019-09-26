<template>
	<div id="app">
		<header></header>
			<div class="nav">
				<div class="menu">
					<li>
						<router-link to="/" class="item">首页</router-link>
						
					</li>
					<li>
						<router-link to="/dynamic" class="item">动态</router-link>
					</li>
					<li>
						<router-link to="/message" class="item">留言</router-link>
					</li>
					<li>
						<router-link to="/about" class="item">关于</router-link>
					</li>
				</div>
			</div>
			<router-view></router-view>
	</div>
</template>

<script>
</script>

<style lang="scss">
	
	body{
		margin: 0;
		padding: 0;
		background: rgb(255, 251, 240);	
	}
	*{
		box-sizing: border-box;
	}
	

		header{
			width: 100%;
			height: 200px;
			background: url(imgs/bg.png) ;
		}
		.nav{
			
			background-color: rgb(191, 171, 134);
			height: 65px;
			
			.menu{
				display: flex;
				width: 50%;
				height: 100%;
				margin-left: 150px;
				li{
					list-style: none;
					width: 150px;
					
					.item{
						height: 100%;
						text-decoration: none;
						display: flex;
						align-items: center;
						justify-content: center;
						
						&:hover{
							background-color: rgb(255, 251, 240);
							border-top: 5px solid rgb(247, 120, 37);
						}
					}
				}
			}
		}
	
	.container{
		background: rgb(255, 251, 240);
		margin: 0;
		padding: 0;
		width: 100%;
	}
</style>

