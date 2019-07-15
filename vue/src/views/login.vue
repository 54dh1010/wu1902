<template>
    <div>

        <Head title="登录&注册" show=“true></Head>
        <mt-navbar v-model="selected">
            <mt-tab-item id="login">登录</mt-tab-item>
            <mt-tab-item id="register">注册</mt-tab-item>
        </mt-navbar>
        <div>
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="login">
                    <mt-field label="用户名" placeholder="请输入用户名" v-model="login.username"></mt-field>
                    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="login.password"></mt-field>
                    <mt-button size="large" type="primary" @click="logins">登录</mt-button>
                </mt-tab-container-item>
                <mt-tab-container-item id="register">
                    <mt-field label="用户名" placeholder="请输入用户名" v-model="register.username"></mt-field>
                    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="register.password"></mt-field>
                    <mt-field label="确认密码" placeholder="请输入确认密码" type="password" >
                    </mt-field>
                    <mt-button size="large" type="danger" @click="registers">注册</mt-button>
                </mt-tab-container-item>
            </mt-tab-container>

        </div>
    </div>
</template>
<script>
    export default {
        name: 'login',
        data() {
            return {
                selected: 'login',
                login: {},
                register: {},
            }
        },
        methods:{
            logins(){
                
                this.$axios.post('/vue/user',
                    this.login,
                ).then(res=>{
                    console.log(res)
                    if(!!res.data.type){
                        sessionStorage.userInfo=JSON.stringify({token:res.data.token})
                        alert('登陆成功，正在跳转首页......')
                        this.$router.push({name:'home'})
                    }else{
                        alert("登录失败，请重新登录")
                        sessionStorage.removeItem("token")
                    }
                })
            },
            registers(){
                this.$axios.post('/vue/register',
                    this.register

                ).then(res=>{
                    console.log(res.data.type)
                    if(!!res.data.type){
                        alert('注册成功，正在跳转首页......')
                        this.$router.push({name:'home'})                        
                    }else{
                        alert('用户已存在，请重新注册！')

                    }
                })
            }
        }
    }

</script>