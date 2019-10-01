<template>
	<div>
		<div class="comment">
			<div class="header">
				<div class="user-msg" @click="dialogFormVisible = true">
					<img  :src="imageUrl" class="avatar">
				</div>
			</div>
			<div class="header-moblie">
				<div class="user-msg" @click="show = true">
					<img  :src="imageUrl" class="avatar">
				</div>
			</div>
			<van-action-sheet
			  v-model="show"
			  :actions="actions"
			  @select="onSelect"
			    cancel-text="取消"
			/>
			<van-dialog
			  v-model="isLogin"
			  title="登录"
			  show-cancel-button
			>
				<Login ></Login>
			</van-dialog>
			
			<van-dialog
			  v-model="isRegister"
			  title="注册"
			  show-cancel-button
			>
			<Register></Register>
			</van-dialog>
			
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
				<textarea class="" placeholder="既然来了,就说几句吧" v-model="textarea" :maxlength="maxLength"></textarea>
				<div class="len">您还可以输入{{len}}个字</div>
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
				<div class="item-right">
					<div class="right-top">
						<div class="user-name">{{item.name}}</div>
						<div class="time">{{item.time}}</div>
					</div>
					<div class="right-content">{{item.content}}</div>
					<div class="right-bottom">
						<div class="reply">回复</div>
					</div>
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
  mounted() {
   
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
				textarea:'',
				maxLength:150,
				len:150,
				show:false,
				isLogin:false,
				isRegister:false,
				actions: [
				        { name: '登录' },
				        { name: '注册' }
				      ]
			}
		},
		watch:{
			textarea(){
					  this.len=this.maxLength - this.textarea.length
			}
		},
		components: {
			Register,
			Login
		},
		methods:{
			  onSelect(item) {
			      this.show = false;
			      if(item.name==='登录'){
					  this.isLogin=true;
				  }else if(item.name==='注册')
				  {
					this.isRegister = true  
				  }
			    },
				login(){
			
			Dialog.confirm({
			  title: '标题',
			  message: '弹窗内容'
			}).then(() => {
			  // on confirm
			}).catch(() => {
			  // on cancel
			});
		}
		}
	}
</script>

<style lang="scss" scoped>
	@media screen and (min-width:500px){
		@import "@/components/scss/comment.scss"
	}
	@media screen and (max-width:500px) {
		@import "@/components/scss/comment-mobile.scss"
	}
</style>
