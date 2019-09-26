<template>
	<div id="app">
		<header>
		</header>
		
		<div class="nav">
			<div class="menu">
				<li class="">
					<router-link to="/home" class="item">首页</router-link>
				</li>
				<li class="">
					<router-link to="/dynamic" class="item">动态</router-link>
				</li>
				<li class="">
					<router-link to="/message" class="item">留言</router-link>
				</li>
				<li class="">
					<router-link to="/about" class="item">关于</router-link>
				</li>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default{
		methods:{
			
		}
	}
</script>

<style lang="scss">
	.active{
		background-color: rgb(255, 251, 240);
		border-top: 5px solid rgb(247, 120, 37);
	}
	body {
		margin: 0;
		padding: 0;
		background: rgb(255, 251, 240);
	}

	* {
		box-sizing: border-box;
	}
	
	header {
		width: 100%;
		min-width: 1200px;
		height: 200px;
		background: url(imgs/bg.png) no-repeat;
		background-size: cover;
	}

	.nav {
		width: 100%;
		min-width: 1200px;
		background-color: rgb(191, 171, 134);
		height: 65px;

		.menu {
			display: flex;
			width: 100%;
			height: 100%;
			padding-left: 150px;

			li {
				list-style: none;
				width: 150px;

				.item {
					height: 100%;
					text-decoration: none;
					display: flex;
					align-items: center;
					justify-content: center;

					&:hover {
						width: 140px;
						margin: 0 auto;
						background-color: rgb(255, 251, 240);
						border-top: 5px solid rgb(247, 120, 37);
					}
				}
			}
		}
	}
</style>
