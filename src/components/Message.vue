<template>
	<div class="home">
		<div class="left">
			<div class="type">
				欢迎留言
			</div>
			<div class="comment">
				<div class="user-msg" @click="dialogFormVisible = true">
					<img v-if="imageUrl" :src="imageUrl" class="avatar">
				</div>
				
				<el-dialog title="" :visible.sync="dialogFormVisible" >
				  
				  <div class="login-bar">
					  <div :class="[ isVisible===false ? active : defaultClass]" @click="isVisible=false" style="line-height: 50px;text-align: center;">登录</div>
					  <div :class="[isVisible?active:defaultClass]" @click="isVisible=true" style="line-height: 50px;text-align: center;">注册</div>
				  </div>
				  <Login :class="[isVisible?look:'']" style="height: 333.5px;"></Login>
				  <Register :class="[isVisible?'':look]"></Register>
				  <div slot="footer" class="dialog-footer">
				    <el-button @click="dialogFormVisible = false">取 消</el-button>
				    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
				  </div>
				</el-dialog>
				
				<div class="comment-content">
					<textarea class="" placeholder="既然来了,就说几句吧"></textarea>
				</div>
				<div class="comment-commit">
					<div class="say">畅所欲言</div>
				</div>
			</div>

			<Comment :comments="users" :msg="msg"></Comment>

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
	import Register from '@/components/Register.vue'
	import Login from '@/components/Login.vue'
	const img5 = require('../imgs/c5.png')
	export default {
		name: 'home',
		components: {
			Right,
			Article,
			Comment,
			Register,
			Login
		},
		data() {
			return {
     dialogFormVisible: false,
        isVisible:false,
		active:'active',
		defaultClass:'defaultClass',
		look:'look',
        formLabelWidth: '120px',
				imageUrl: img5,
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
			login(){
			}
			
		}
	}
</script>

<style lang="scss" scoped>
	@import "@/components/scss/message.scss"
</style>
