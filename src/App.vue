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
				
				<div class="" @click="goHome()">
					<router-link to="" class="item">首页</router-link>
				</div>
				<div class="" @click="goDynamic()">
					<router-link to="" class="item">动态</router-link>
				</div>
				<div class="" @click="goMessage()">
					<router-link to="" class="item">留言</router-link>
				</div>
				<div class="" @click="goAbout()">
					<router-link to="" class="item">关于</router-link>
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
				},
			
			goDynamic() {
				this.$router.push({
					path:'/detail'
				});
				this.show = false;
			},
			goHome() {
				this.$router.push({
					path:'/home'
				});
				this.show = false;
			},
			goMessage() {
				this.$router.push({
					path:'/message'
				});
				this.show = false;
			},
			goAbout() {
				this.$router.push({
					path:'/about'
				})
				this.show = false;
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
