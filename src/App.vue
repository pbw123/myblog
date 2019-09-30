<template>
	<div id="app">
		<header>
		</header>
		<div class="top-nav">
			<div class="directory"  @click="showPopup" >
				<img :src="directory"/>
				</div>
			<div class="search">
				<img :src="search" alt="">
			</div>
		</div>
		<van-popup v-model="show" position="left" class="nav-mobile">
		<div class="nav-mobile">
			<div class="menu">
				
				<div class="">
					<router-link to="/home" class="item">首页</router-link>
				</div>
				<div class="">
					<router-link to="/dynamic" class="item">动态</router-link>
				</div>
				<div class="">
					<router-link to="/message" class="item">留言</router-link>
				</div>
				<div class="">
					<router-link to="/about" class="item">关于</router-link>
				</div>
			</div>
		</div>
		</van-popup>
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
	const directory = require('./imgs/directory.png')
	const search = require('./imgs/search.png')
	export default {
		data() {
			return {
				show: false,
				directory:directory,
				search:search
			}
		},
		methods: {
				showPopup() {
					this.show = true;
				}
		}
	}
</script>

<style lang="scss">
	@media screen and (min-width: 500px) {
		@import "@/components/scss/app.scss"
	}

	@media screen and (max-width: 500px) {
		@import "@/components/scss/app-mobile.scss"
	}
</style>
