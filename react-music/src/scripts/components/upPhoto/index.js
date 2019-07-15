
import React, { Component } from 'react';
import {axios,history} from "&";
import "./style.scss"
import {Toast,Modal} from "antd-mobile"
const alert = Modal.alert;
export class Photo extends Component {
    state={imgs:require("@/assets/images/pic.jpg")}
    componentWillMount(){
        if(localStorage.imgs){
            this.setState({
                imgs:localStorage.imgs
            })
        }

    }
    upLoad=()=>{
        if(sessionStorage.token){
            this.refs.one.click()
        }else{
            alert('未登录', '请先登录', [
                { text: '取消',  },
                { text: '确定', onPress: () => history.push('/login') },
              ])
            // Toast.fail('未登录', 1)
           
        }
    }
    upImg=()=> {
        console.log(111)
        let file = this.refs.one.files[0]
        let data = new FormData();
        data.append("avatar", file)

        axios({
            url: "/react/uploadAvatar",
            method: "POST",
            contentType: false,
            processDate: false,
            // data:data,
            data: data,
            // token:sessionStorage.token
            
            
// processData: false,//默认情况下，通过data选项传递进来的数据，如果是一个对象(技术上讲只要不是字符串)，都会处理转化成一个查询字符串，以配合默认内容类型 "application/x-www-form-urlencoded"。如果要发送 DOM 树信息或其它不希望转换的信息，请设置为 false。
// contentType: false,//数据编码格式不使用jquery的方式 为了避免 JQuery 对其操作，从而失去分界符，而使服务器不能正常解析文件。data:formData,
        }).then(res => {
            console.log(res.data)
            // const newimgs = res.data.avatarurl.replace(/public/, '');          
            const newimgs = res.data.avatarurl.replace(/public/, 'http://localhost:1902/');
            this.setState({
                imgs:newimgs
            })
            localStorage.imgs = newimgs
        })
    }
    render() {
        
        return (
            <div className="photo">
                <img src={this.state.imgs} alt="" className="imgs" onClick={this.upLoad} />
                
                <input type="file" accept="images/*" ref='one'  onChange={this.upImg} style={{display:'none'}} />
            </div>


        )
    }
}


// import React,{Component} from "react";
// import "./index.scss";
// import {axios} from "&";
// import {connect} from "react-redux";
// import { shangchuantouxiang } from "../../actions";


// const mapStateToProps=(state)=>{
//     console.log(state)
//     return{
//         tiuxianglujin:state.data.tiuxianglujin,
      
//     }
// }
// export  class Photo extends Component {
//     //上传头像逻辑
//     shangchuan=()=>{
//         let file=this.refs.one.files[0];  //需要上传的图片
//         let data=new FormData(); //新建表单对象  <form></form>
//         data.append("avatar",file);
//         console.log("data",data,file)
//         axios({
//             url:"/react/uploadAvatar",
//             method:"POST",
//             contentType:false,
//             processData:false,
//             data:data
//         }).then(res=>{
//             var touxiang = res.data.avatarurl.replace(/public/,'');
//             sessionStorage.touxiang = touxiang;
//             this.props.dispatch(shangchuantouxiang(touxiang))

//         })
//     };
//     //调取文件上传的点击事件触发
//     uploadimg=()=>{
//         this.refs.one.click();
//     };
//     componentDidMount(){
//     }
    
//     render(){
//         const {
//             tiuxianglujin
//         }=this.props
//         return(
//             <div>
//                 <div className="touxiang">
//                      <img src={sessionStorage.touxiang?("http://localhost:1902"+sessionStorage.touxiang):require("@/assets/images/1.jpg")} alt="" width="100%" height="100%" onClick={this.uploadimg}/>
//                      <input type="file" ref="one" accept="image/*" onChange={this.shangchuan} className="hiddenInput"/>
//                 </div>
                 
//             </div>
//         )
//     }
// }

