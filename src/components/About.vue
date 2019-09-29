<template>
	<div class="home">
		<div class="left">
		 <Register></Register>
		 <button @click="setStorage()">设置</button>
		 <button @click="getStorage()">获取</button>
		 <button @click="removeStorage()">删除</button>
		 {{this.title}}
		</div>
		<div class="right">
			<Right></Right>
		</div>
		
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
				imgs:[
					{url:img1},
					{url:img2},
					{url:img3},
					{url:img4}
				],
				title:''
			}
		},
		methods:{
			setStorage(){
				localStorage.setItem('data','这是一条数据')
			},
			getStorage(){
				var abc=localStorage.getItem('data')!==null
				if(abc){
					console.log(abc)
					this.title=localStorage.getItem('data')
				}else{
					this.title='标题'
					console.log('kwkw')
				}
			},
			removeStorage(){
				localStorage.removeItem('data')
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
