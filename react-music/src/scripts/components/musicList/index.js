import React, { Component } from 'react'
import { Button } from 'antd-mobile'
import "./style.scss";
import { connect } from "react-redux";
import { closeOneSong, playOneSong, closeAll } from "@/scripts/action"
@connect(
    state => {
        return {
            ...state.data
        }
    }
)
class MusicList extends Component {
    // state ={
    //     // MusicList: [
    //     //     { title: '泡沫', author: 'G.E.M. 邓紫棋' },
    //     //     { title: '泡沫', author: 'G.E.M. 邓紫棋' }
    //     // ]
    // }
    playOne = (val) => {
        // console.log(val.title)

        const { dispatch, isPlay } = this.props
        dispatch(playOneSong(val.title))
        if (!isPlay) {
            this.props.playAndStop()
        }
        // this.props.playAndStop()
        if(isPlay){
            

        }
    }
    // playStop=()=>{
    //     this.props.playAndStop()

    // }
    closeOneList = (val) => {
        // console.log(val)
        const { dispatch ,isPlay} = this.props
        if(this.props.shou.length==1){
            if(isPlay){

                // dispatch(closeOneSong(val.title))
                this.props.playAndStop()
            }
        }
        dispatch(closeOneSong(val.title))

    }

    closeList = () => {
        this.props.closeList();
    }
    closeAllSong = () => {
        const { dispatch } = this.props
        dispatch(closeAll())
        this.props.playAndStop()
        
    }
    render() {
        // const { MusicList } = this.state
        const { isList, shou, music  } = this.props
        // console.log(music,shou)
        return (
            <div className='allPar'>
                <div className={isList ? "musicList show" : "musicList"}>
                    <div className='top'>
                        <h4 className='title'>播放列表</h4>
                        <img className="img" src={require("@/assets/images/icon-list-clear.png")} onClick={this.closeAllSong} />
                    </div>
                    <div className='list-center'>
                        <ul className='list' >
                            {
                                shou&&shou.map((item, i) => {
                                    return (
                                        <li className='list-item' key={i} style={{ color: item.title === music.title ? "#31c37c" : "#fff" }}  >
                                            <span onClick={this.playOne.bind(this, item)} className="title">{item.author}--{item.title}</span>
                                            <img onClick={this.closeOneList.bind(this, item)} className="delete" src={require("@/assets/images/icon-record-close.png")} />
                                        </li>
                                    )
                                })
                            }

                        </ul>
                    </div>
                    <div className='footer'>
                        <Button className='btn' inline size="small" onClick={this.closeList} >关闭</Button>
                    </div>
                </div>
                <div onClick={this.closeList} className={isList ? "shadow " : ""}>

                </div>
            </div>
        )
    }
}
export default MusicList
