import React, { Component } from 'react';
import "./styles.scss"
import {List} from "antd-mobile";
import {getPlayYiBo,getPlay} from "../../action"
import {connect} from "react-redux"
const Item=List.Item
@connect(
    state=>{
        return {
            ...state.data
        }
    }
)
class HistoryPlay extends Component {
    state={
        history:[]
    }
    comeback=()=>{
        this.props.goPlayer()
    }
    playHistory=(val)=>{
        console.log(val)
        const{dispatch,isPlay}=this.props
        dispatch(getPlayYiBo(val))
        if(!isPlay){
            dispatch(getPlay())
        }
    }
    
    render() {
        const{isGoHIstoryPlay,yiBoGeQu}=this.props

        return (
            <div className={isGoHIstoryPlay?"historyPlay-par show":'historyPlay-par'}>
                <div className='historyPlay-top'>
                    <img className="historyPlay-icon" src={require("@/assets/images/icon-arrow-left.png")} onClick={this.comeback} />
                    <p className="historyPlay-title">已播放歌曲</p>
                    <span></span>
                </div>
                <div className='historyPlay-center'>
                    {
                        yiBoGeQu&&yiBoGeQu.map((item,i)=>{
                            return (
                                <Item key={i} arrow="horizontal"
                                    multipleLine platform="android"
                                    onClick={()=>this.playHistory(item)}
                                    className='paihang-song'
                                >
                                   {item.title}
                                </Item>

                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default HistoryPlay