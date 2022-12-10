<template  >
    <div class="login">
        <div class="relative">
            <div class="left" >
                <el-row>
                        <el-col :span="24">
                            <div class="homepageLogo">
                                <ul>
                                    <li>
                                        <el-image style="width: 50px; height: 50px" :src="url" fit="fit" />
                                    </li>
                                    <li><span>ghAdmin</span></li>
                                </ul>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="24">
                            <el-image class="boxbg" :src="boxbg" fit="fit" />
                            <p class="p1">欢迎使用本系统</p>
                            <p class="p2">开箱即用的中后台管理系统</p>
                        </el-col>
                    </el-row>
            </div>
                <div class="right">
                    <el-row>
                        <el-col :span="24">
                            <h2 class="h2Login">登录</h2>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="24">
                            <!-- :rules="rules" rules 为数组 当前校验的集合 ref="ruleFormRef"可以理解为给当前的From 取一个名字该名字
                            可以用于获取表单对象 -->
                            <el-form :model="form" label-width="120px" label-position="top" size="large" class="form"
                              :rules="rules" ref="ruleFormRef">
                                <el-form-item label="用户名" prop="userName">
                                    <el-input v-model="form.userName" />
                                </el-form-item>
                                <el-form-item label="密码" prop="passWord">
                                    <el-input v-model="form.passWord" type="password" show-password />
                                </el-form-item>
                                <el-form-item>
                                    <el-button class="submitBtn" type="primary" @click="onSubmit(ruleFormRef)">登录
                                    </el-button>
                                </el-form-item>
                            </el-form>
                        </el-col>
                    </el-row>
                </div>
        </div>
    </div>
</template>
<!-- VUE3语法 -->
<script lang="ts" setup>
//导入变量 响应式变量 ref用来定义简单的对象复杂的就是用reactive
import {ref,reactive} from 'vue'
import type {FormInstance,FormRules} from 'element-plus'
//element-plus 导入弹窗
import { ElMessage } from 'element-plus';

const url = ref('/images/logo.0606fdd2.png')
const boxbg=ref('/images/svgs/login-box-bg.svg')

const form = reactive({
    userName:'',
    passWord:''    
})
//此处要引入一个实例（FormInstance）
const ruleFormRef = ref<FormInstance>();
//通过onsubmit方法进行拦截 ruleFormRef他可能是 FormInstance这个对象也可能是 undefined
const onSubmit=async(ruleFormRef:FormInstance|undefined)=>{
    //做一个验证 如果ruleFormRef值是undefined那么就返回
    console.log("woaini "+ruleFormRef)
    if(!ruleFormRef)return;
    //由于该方法体是异步的所以此处得的用await 
    await ruleFormRef.validate(async(valid,fileds)=>{
        if(valid)
        {
            console.log("正在登录")
            ElMessage({
                type:"success",
                message:"正在登录..."
            }) 
        }
        else
        { 
            //弹窗提示
            
            //如果验证不通过那么就请弹窗    
            console.log(fileds)
            console.log(fileds+" DDD "+valid)
            
            //声明一个变量 他的变量是什么类型呢？ string
            let errors:string="";
            //从fileds里面取值?代表如果不为空就取 
            fileds?.userName?.forEach(element=>{
                errors+=element.message+";"
            })
            fileds?.passWord?.forEach(element=>{
                errors+=element.message+";"
            })
            ElMessage({
                type:"warning",
                message:errors
            })
        }
    });
}

//但是我们此处还要做一件事 就是指定rules的类型。导入表单类型
//import type {FormInstance,FormRules} from 'element-plus'
const rules = reactive<FormRules>({
    //用户名
    userName: [{ required: true, message: "请输入用户名", trigger: 'blur' }],
    //密码
    passWord: [{ required: true, message: "请输入密码", trigger: 'blur' }]
})

</script>
<!-- scoped 作用域 只在当前页面生效 -->
<style lang="scss" scoped>
    .login {
    width: 100%;
    height: 100%;
    .relative {
        width: 100%;
        height: 100%;
        text-align: center;

        .left {
            width: 50%;
            height: 100%;
            float: left;
             background-image: url('/images/svgs/login-bg.svg');

            .boxbg {
                width: 350px;
                height: 350px;
                 margin-top: 100px;
            }

            .homepageLogo {
                height: 50px;
                line-height: 50px;
                margin-top: 40px;

                span {
                    color: white;
                    font-size: 24px;
                }

                ul {
                    list-style: none;

                    li {
                        float: left;
                        margin-left: 5px;
                    }
                }
            }

            p {
                color: white;
            }

            .p1 {
                font-size: 1.875rem;
                line-height: 2.25rem;
            }

            .p2 {
                font-size: 0.875rem;
                line-height: 1.25rem;
            }
        }

        .right {
            width: 50%;
            float: left;
            padding-top: 15%;
            // .h2Login
            // {
            //     text-align: center;
            // }
            .form {
                width: 50%;
                margin: 0px auto;

                .submitBtn {
                    width: 100%;
                }
            }
        }
    }
}
</style>