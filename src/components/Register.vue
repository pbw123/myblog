<template>
	<div>
		<div class="register-pc">
			<el-form  status-icon  ref="ruleForm" label-width="100px" class="demo-ruleForm">

				<el-form-item label="昵称" prop="name">
					<el-input v-model="name"></el-input>
				</el-form-item>

				<el-form-item label="密码" prop="pass">
					<el-input type="password" v-model="pass" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="确认密码" prop="checkPass">
					<el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
				</el-form-item>

			</el-form>
		</div>

	</div>
</template>

<script>
import {register} from "../api/requestApi";

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
			  name:'',
        pass:'',
				ruleForm: {
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
      register() {
        register({
          userName:this.name,
          userPass:this.pass
        }).then(res => {

        });
      },
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
