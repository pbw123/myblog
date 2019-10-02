<template>
	<div id="app" :class="[isNight ? night:'']">
		<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
			<header>
				<el-tooltip class="item" effect="dark" content="点击试试" placement="right">
					<img :src="yemu" alt="" @click="onNight()">
				</el-tooltip>
			</header>
			<div class="top-nav">
				<div class="directory" @click="showPopup">
					<img :src="directory" />
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
					<li class="" @click="goHome()">
						<router-link to="/home" class="item">首页</router-link>
						<router-link to="/" class="item" style="display: none;"></router-link>
					</li>
					<li class="" @click="goDynamic()">
						<router-link to="/dynamic" class="item">动态</router-link>
					</li>
					<li class="" @click="goMessage()">
						<router-link to="/message" class="item">留言</router-link>
					</li>
					<li class="">
						<router-link to="/about" class="item">关于</router-link>
					</li>
				</div>
			</div>
			<router-view></router-view>
		</van-pull-refresh>
		<div class="icp" style="height: 40px;background-color: black;text-align: center;opacity: 0.9;color: white;">
			网站备案号
		</div>
	</div>
</template>

<script>
	const directory = require('./imgs/directory4.png')
	const search = require('./imgs/search2.png')
	const yemu = require('./imgs/ym.png')
	export default {
		data() {
			return {
				show: false,
				directory: directory,
				search: search,
				yemu: yemu,
				count: 0,
				isLoading: false,
				isNight: false,
				night: 'night'


			}
		},
		methods: {
			showPopup() {
				this.show = true;
			},

			goDynamic() {
				this.$router.push({
					path: '/dynamic',
					query: {
						isNight: this.isNight
					}

				});
				this.show = false;
			},
			goHome() {
				this.$router.push({
					path: '/home',
					query: {
						isNight: this.isNight
					}
				});
				this.show = false;
			},
			goMessage() {
				this.$router.push({
					path: '/message',
					query: {
						isNight: this.isNight
					}
				});
				this.show = false;
			},
			goAbout() {
				this.$router.push({
					path: '/about'
				})
				this.show = false;
			},
			onRefresh() {
				setTimeout(() => {
					this.$toast('刷新成功');
					this.isLoading = false;
					this.count++;
				}, 500);
			},
			onSearch() {

			},
			onNight() {
				this.isNight = !this.isNight
				this.$router.push({
					path: '/home',
					query: {
						isNight: this.isNight
					}
				})
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
