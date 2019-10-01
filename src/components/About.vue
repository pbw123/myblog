<template>

	<div class="home">
		<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
		  <p>刷新次数: {{ count }}</p>
		</van-pull-refresh>
		<!-- <div class="left">
		 <Register></Register>
		 
		 <div>
		 	<van-button type="default">默认按钮</van-button>
		 	<van-button type="primary">主要按钮</van-button>
		 	<van-button type="info">信息按钮</van-button>
		 	<van-button type="warning">警告按钮</van-button>
		 	<van-button type="danger">危险按钮</van-button>
		 </div>
		 
		</div> -->
		
		<!-- <div class="right">
			<Right></Right>
		</div> -->
	</div>
	
</template>

<script>
	import Right from '@/components/Right.vue'
	import Article from '@/components/Article.vue'
	import Register from '@/components/Register.vue'
	const img1=require('../imgs/c1.png')
	const img2=require('../imgs/c2.png')
	const img3=require('../imgs/c3.png')
	const img4=require('../imgs/c4.png')
	export default {
		name: 'home',
		components: {
			Right,
			Article,
			Register
		},
		data() {
			return {
				  count: 0,
				  isLoading: false,
					  
				imgs:[
					{url:img1},
					{url:img2},
					{url:img3},
					{url:img4}
				]
			}
		},
		methods:{
			onRefresh() {
			  setTimeout(() => {
			    this.$toast('刷新成功');
			    this.isLoading = false;
			    this.count++;
			  }, 500);
			}
		}
	}
</script>

<style lang="scss" scoped>
	
	.home {
		width: 80%;
		margin: 25px auto;
		display: flex;

		.left {
			flex: 0 0 70%;
         margin-right: 30px;
		 min-width: 800px;
		}

		.right {
			width: 350px;
		}
		 
	}
</style>
