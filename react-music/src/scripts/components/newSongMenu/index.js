

import React, { Component } from 'react';
import "./style.scss"
import { connect } from "react-redux";
import { getNewSong } from '../../action';
import {Toast} from 'antd-mobile'
@connect(
    state => {
        return {

            list: state.data.list
        }
    }
)
class NewSongMenu extends Component {
    saveSongMenu = () => {
        // console.log(this.props)
        const { dispatch,history ,list} = this.props
        // console.log(this.inputText.value)
        const isCanAdd=!list.some((item)=>{
            return item===this.inputText.value
        });
        if(this.inputText.value!==''){
            if(isCanAdd){
                dispatch(getNewSong(this.inputText.value))
                this.inputText.value=""
                this.props.goAddSongMenu()   
                setTimeout(()=>{
                    this.props.goAllSongMenu()
                },400)         
            }else{
                Toast.fail('该歌单已存在', 1);
            }
        }else{
            Toast.fail('歌单不能为空', 1);

        }

    }
    comeback = () => {
        this.props.goAddSongMenu()
    }
    render() {
        const{isNewSongMenu}=this.props
        return (

            <div>
                <div className={isNewSongMenu?"qqmusic-new-songmenu show":'qqmusic-new-songmenu'}>
                    <div className="new-songmenu-header">
                        <img className="icon-arrow-left" src={require("@/assets/images/icon-arrow-left.png")} onClick={this.comeback} />
                        <p className="title">新建歌单</p>
                        <span className="save" onClick={this.saveSongMenu}>保存</span>
                    </div>
                    <div className="new-songmenu-body">
                        <input ref={(input) => this.inputText = input} className="input-text" type="text" placeholder="请输入内容"  />
                        <p className="total-count"></p>
                        {/* <NoticeBar className={isErrorShow ? 'error-notice show' : 'error-notice'} mode="closable" icon={null}>！最多输入20个字</NoticeBar> */}
                    </div>
                </div>
            </div>
        )
    }
}
export default NewSongMenu