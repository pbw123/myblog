<template>
	<div class="home">
		<div class="left">
			<div class="type">
				欢迎留言
			</div>
			<div class="comment">
				<div class="user-msg">
					<el-upload class="" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess"
					 :before-upload="beforeAvatarUpload">
						<img v-if="imageUrl" :src="imageUrl" class="avatar">
						<div v-else class="avatar-uploader">头像</div>
					</el-upload>
					<div class="">
						<input type="text" class="user-name" placeholder="昵称" />
					</div>
				</div>
				<div class="comment-content">
					<textarea class="" placeholder="既然来了,就说几句吧"></textarea>
				</div>
				<div class="comment-commit">
					<div class="say">畅所欲言</div>
				</div>
			</div>

			<div class="comment-bar">
				<div class="bar-left">评论</div>
				<div class="bar-right">
					<span class="count">{{count}}</span>
					<span class="tiao">条评论</span>
				</div>
			</div>
			
			<div class="comment-list">
				<div class="tip"></div>
				<div class="comment-item" v-for="(item,index) in users" :key="index">
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
		<div class="right">
			<Right></Right>
		</div>

	</div>
</template>

<script>
	import Right from '@/components/Right.vue'
	import Article from '@/components/Article.vue'
	const img5 = require('../imgs/c5.png')
	export default {
		name: 'home',
		components: {
			Right,
			Article
		},
		data() {
			return {
				
				imageUrl: '',
				count:456,
				users:[
					{img:img5,name:'Joker',content:'这是评论内容',time:'2019-9-26 21:16'},
					{img:img5,name:'Joker',content:'这是评论内容',time:'2019-9-26 21:16'},
					{img:img5,name:'Joker',content:'这是评论内容',time:'2019-9-26 21:16'},
					{img:img5,name:'Joker',content:'这是评论内容',time:'2019-9-26 21:16'}
				]
			}
		},
		methods: {
			handleAvatarSuccess(res, file) {
				this.imageUrl = URL.createObjectURL(file.raw);
			},
			beforeAvatarUpload(file) {
				const isJPG = file.type === 'image/jpeg';
				const isLt2M = file.size / 1024 / 1024 < 2;

				if (!isJPG) {
					this.$message.error('上传头像图片只能是 JPG 格式!');
				}
				if (!isLt2M) {
					this.$message.error('上传头像图片大小不能超过 2MB!');
				}
				return isJPG && isLt2M;
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "@/components/scss/message.scss"
</style>
