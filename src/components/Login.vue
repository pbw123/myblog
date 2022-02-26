<template>
	<div>
		<el-form :model="ruleForm" status-icon  ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<div class="input-pc">
				<div class="phone">
					<el-form-item label="手机号/昵称" prop="name" class="phone-input">
					  <el-input  v-model="ruleForm.name" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="密码" prop="pass">
					  <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
					</el-form-item>
				</div>
			</div>
		</el-form>
		

	</div>
</template>

<script>
	 import {login} from "../api/requestApi";

   export default {
	    data() {
		 
	      var validatePass = (rule, value, callback) => {
	        if (value === '') {
	          callback(new Error('请输入密码'));
	        } 
			else if(value.trim().length==0) {
			  callback(new Error('请正确输入密码'));
			}else {
	          if (this.ruleForm.checkPass !== '') {
	            this.$refs.ruleForm.validateField('checkPass');
	          }
	          callback();
	        }
	      };
	     
	      return {
	        ruleForm: {
	          pass: '',
	          checkPass: '',
			  name:'',
			  phone:''
	        },
	        rules: {
	          pass: [
	            { required: true,validator: validatePass, trigger: 'blur' }
	          ],
	         
			   name: [
				  { required: true, message: '请输入手机号/昵称', trigger: 'blur' },
			     { required: true,pattern: /^(?!.{11}|^\s*$)/g,message: '请正确输入手机号昵称', trigger: 'blur' }
				 ]
	        }
	      };
	    },
	    methods: {
        login() {
          login({
            userPass:this.ruleForm.pass,
            phoneNumber:this.ruleForm.name
          }).then(res => {
            if (res.code == 200) {
              this.$message.success("登录成功")
            }
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
	      }
	    }
	  }
</script>

<style lang="scss" scoped>
	@media screen and (min-width:500px){
		.input-mobile{
			display: none;
		}
	}
	@media screen and (max-width:500px){
		.input-pc{
			display: none;
		}
		
	}
</style>
