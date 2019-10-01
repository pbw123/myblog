<template>
	<div class="home">
		<div class="left">
			<div class="type">
				欢迎留言
			</div>
			<div class="com">
				<Comment :comments="users" :msg="msg"></Comment>
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
	import Comment from '@/components/Comment.vue'

	const img5 = require('../imgs/c5.png')
	export default {
		name: 'home',
		components: {
			Right,
			Article,
			Comment
		},
		data() {
			return {

				msg: {
					count: 456,
					kind: '留言'
				},
				users: [{
						img: img5,
						name: 'Joker',
						content: '这是留言内容',
						time: '2019-9-26 21:16'
					},
					{
						img: img5,
						name: 'Joker',
						content: '这是留言内容',
						time: '2019-9-26 21:16'
					},
					{
						img: img5,
						name: 'Joker',
						content: '这是留言内容',
						time: '2019-9-26 21:16'
					},
					{
						img: img5,
						name: 'Joker',
						content: '这是留言内容',
						time: '2019-9-26 21:16'
					}
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
			},
			login() {}

		}
	}
</script>

<style lang="scss" scoped>
	@media screen and (min-width:500px) {
		@import "@/components/scss/message.scss"
	}
	@media screen and (max-width:500px) {
		
		.type {
			font-size: 26px;
			font-family: "microsoft yahei";
			color: '#474645';
			font-weight: bold;
			border-bottom: 5px solid rgb(219, 109, 76);
		}
		.com{
			margin-top: -60px;
		}
		
	}

</style>
