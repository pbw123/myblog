<template>
	<div>
		<div class="comment">
			<div class="user-msg" @click="dialogFormVisible = true">
				<img v-if="imageUrl" :src="imageUrl" class="avatar">
			</div>

			<el-dialog title="" :visible.sync="dialogFormVisible">

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
		<div class="comment-bar">
			<div class="bar-left">{{msg.kind}}</div>
			<div class="bar-right">
				<span class="count">{{msg.count}}</span>
				<span class="tiao">条{{msg.kind}}</span>
			</div>
		</div>

		<div class="comment-list">
			<div class="tip"></div>
			<div class="comment-item" v-for="(item,index) in comments" :key="index">
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

</template>

<script>
	const img5 = require('../imgs/c5.png')
	import Register from '@/components/Register.vue'
	import Login from '@/components/Login.vue'
	export default {
		props: {
			comments: Array,
			msg: Object
		},

		data() {
			return {
				dialogFormVisible: false,
				isVisible: false,
				active: 'active',
				defaultClass: 'defaultClass',
				look: 'look',
				formLabelWidth: '120px',
				imageUrl: img5,
			}
		},
		components: {
			Register,
			Login
		}
	}
</script>

<style lang="scss" scoped>
	@import "@/components/scss/comment.scss"
</style>
