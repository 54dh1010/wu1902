

import React, { Component } from 'react';
import { List, InputItem, Button, WhiteSpace, WingBlank, } from "antd-mobile"
import "./index.scss";
import { axios } from "&"
const pReg = /^1(3|5|7|8|9)\d{9}$/
const cReg = /^\d{4}$/
let timer = null

class Login extends Component {
    state = {
        loginDis: true,
        cDisable: true,
        text: '发送验证码',
        num: 60,
        flag: true,
        imgs:require("@/assets/images/pic.jpg")

    }
    componentWillMount(){   
        if(localStorage.imgs){
            this.setState({
                imgs:localStorage.imgs
            })
        }
    }
    onmobile = (val) => {
        console.log(val)
        // console.log(this.mobile.state.value)

        if (this.state.flag) {
            this.setState({
                cDisable: !pReg.test(val)
            })
        }
        this.setState({
            loginDis: !(cReg.test(this.code.state.val) && pReg.test(val))
        })
    }
    getCode = () => {
        axios.post('/react/sendCode',{
            mobile:this.mobile.state.value,
        }).then(res=>{
            console.log(res.data)
        })


        this.setState({
            cDisable: true,
            flag: false
        })
        this.start()



    }
    start = () => {
        timer = setInterval(() => {
            if (this.state.num > 0) {
                this.setState({
                    num: --this.state.num,
                    text: '倒计时' + this.state.num + "s",
                })
            } else {
                clearInterval(timer);
                this.setState({
                    num: 60,
                    text: "输入验证码",
                    cDisable: false,
                    flag: true
                })
            }
        }, 1000)

    }
    onCode = (val) => {
        // console.log(this.mobile.state.value)

        this.setState({
            loginDis: !(cReg.test(val) && pReg.test(this.mobile.state.value))
        })
    }
    logins=()=>{
        axios.post('/react/check',{
            mobile:this.mobile.state.value,
            code:this.code.state.value,
        }).then(res=>{
            console.log(res.data)
            sessionStorage.token=JSON.stringify(res.data.token)
            if(!!res.data.type){
                this.props.history.push('/app/home')
            }  
        })
        sessionStorage.username=this.mobile.state.value
    }



    goregister=()=>{
        console.log(this.props)
        this.props.history.push('/register')
    }
    render() {
        const {
            loginDis,
            cDisable,
            text,
            imgs

        } = this.state
      
        return (
            <div className='login'>
                <div className='login-img'>
                    <img src={imgs} alt=""/>
                </div>
                <List className="phone">
                    <InputItem
                        type='tel'
                        clear
                        placeholder="请输入手机号"
                        ref={el => this.mobile = el}
                        onChange={this.onmobile}

                    >手机号</InputItem>
                    <InputItem
                        type='number'
                        clear
                        placeholder="输入验证码"
                        ref={el => this.code = el}
                        onChange={this.onCode}
                    >验证码</InputItem>
                    <Button className="btn" onClick={this.getCode} type="warning" disabled={cDisable} inline >{text}</Button>
                </List>
                <Button className="denglu" onClick={this.logins} type="primary" disabled={loginDis}>登录</Button>


            </div>
            // <div>
            //     <header className="mui-bar mui-bar-nav">
            //         <h1 className="mui-title">登录</h1>
            //     </header>
            //     <div className="mui-content">
            //         <form  className="mui-input-group">
            //             <div className="mui-input-row">
            //                 <label>账号</label>
            //                 <input id='account' type="text" className="mui-input-clear mui-input" placeholder="请输入账号"/>
            //             </div>
            //             <div className="mui-input-row">
            //                 <label>密码</label>
            //                 <input id='password' type="password" className="mui-input-clear mui-input" placeholder="请输入密码"/>
            //             </div>
            //         </form>
                   
            //         <div className="mui-content-padded">
            //             <button id='login' className="mui-btn mui-btn-block mui-btn-primary">登录</button>
            //             <button onClick={this.goregister} id='login' type="button" className="mui-btn mui-btn-block mui-btn-warning">注册</button>
            //             <div className="link-area"><a id='reg'>注册账号</a> <span className="spliter">|</span> <a id='forgetPassword'>忘记密码</a>
            //             </div>
            //         </div>
                    
            //     </div>
            // </div>
            
        )
    }
}

export default Login
