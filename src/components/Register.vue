<template>
	<div>
		<div class="register-pc">
			<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<el-form-item label="头像">
					<div class="user-msg">
						<el-upload class="" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess"
						 :before-upload="beforeAvatarUpload">
							<img v-if="imageUrl" :src="imageUrl" class="avatar">
							<div v-else class="avatar-uploader">头像</div>
						</el-upload>
					</div>
				</el-form-item>

				<el-form-item label="昵称" prop="name">
					<el-input v-model="ruleForm.name"></el-input>
				</el-form-item>
				<div class="phone">
					<el-form-item label="手机号" prop="phone" class="phone-input">
						<el-input v-model="ruleForm.phone" autocomplete="off"></el-input>
					</el-form-item>
					<el-button class="send" size="small">发送验证码</el-button>
				</div>

				<el-form-item label="密码" prop="pass">
					<el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="确认密码" prop="checkPass">
					<el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
				</el-form-item>

			</el-form>
		</div>

		<div class="register-mobile">



			<van-cell-group>
				<div class="user-msg">
					<el-upload class="" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess"
					 :before-upload="beforeAvatarUpload">
						<img v-if="imageUrl" :src="imageUrl" class="avatar">
						<div v-else class="avatar-uploader">头像</div>
					</el-upload>
				</div>
				<van-field v-model="ruleForm.name" required label="手机号" placeholder="请输入手机号">
					<van-button slot="button" size="small" type="primary">发送验证码</van-button>
				</van-field>

				<van-field v-model="ruleForm.pass" type="password" label="密码" placeholder="请输入密码" required right-icon="question-o"
				 @click-right-icon="$toast('密码长度为6~10位')" />

			</van-cell-group>
		</div>
	</div>
</template>

<script>
	export default {
		data() {

			var validatePass = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入密码'));
				} else if (value.trim().length == 0) {
					callback(new Error('请正确输入密码'));
				} else {
					if (this.ruleForm.checkPass !== '') {
						this.$refs.ruleForm.validateField('checkPass');
					}
					callback();
				}
			};
			var validatePass2 = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请再次输入密码'));
				} else if (value !== this.ruleForm.pass) {
					callback(new Error('两次输入密码不一致!'));
				} else {
					callback();
				}
			};
			return {
				ruleForm: {
					pass: '',
					checkPass: '',
					name: '',
					phone: '',
					pass: ''

				},
				imageUrl: '',
				rules: {
					pass: [{
						required: true,
						validator: validatePass,
						trigger: 'blur'
					}],
					checkPass: [{
						validator: validatePass2,
						trigger: 'blur'
					}],
					name: [{
							required: true,
							message: '请输入昵称',
							trigger: 'blur'
						},
						{
							required: true,
							pattern: /^(?!.{11}|^\s*$)/g,
							message: '请正确输入昵称',
							trigger: 'blur'
						}
					],
					phone: [{
							required: true,
							message: '请输入手机号',
							trigger: 'blur'
						},
						{
							required: true,
							pattern: /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/,
							message: '请输入正确的手机号',
							trigger: 'blur'
						}
					]
				}
			};
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			},
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
	@media screen and (min-width:500px) {
		@import "@/components/scss/register.scss"
	}

	@media screen and (max-width:500px) {
		@import "@/components/scss/register-mobile.scss"
	}
</style>
