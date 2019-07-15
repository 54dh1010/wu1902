
import React, { Component } from 'react'
import "./style.scss"
import {Carousel} from 'antd-mobile'
import {connect} from "react-redux";
import { nextSong } from '../../action';
@connect(
    state=>{
        return {
            ...state.data
        }
    }
)
class SongDetails extends Component {
    consoleSwitch=()=>{

    }
    comeback=()=>{
        this.props.goSongDetails()
    }
    goPlay=()=>{
        this.props.playAndStop()
    }
    // 上一曲
    prevMusic=()=>{
        const{music,shou,dispatch}=this.props
        const index=shou.findIndex((item)=>item.title===music.title)
        let song;
        if(index>0){
            song=shou[index-1];
        dispatch(nextSong(song))
            
        }
        if(index==0){
            song=shou[shou.length-1];
        dispatch(nextSong(song))

        }
    }
    // 下一曲
    nextMusic=()=>{
        const{music,shou,dispatch}=this.props
        const index=shou.findIndex((item)=>item.title===music.title)
        console.log(index)
        let song;
        if(index<shou.length-1){
            song=shou[index+1];
        }else{
            song=shou[0]
        }
        // console.log(song)
        // console.log(shou)
        dispatch(nextSong(song))
    }
    render() {
        const{isDetails,isPlay,music}=this.props
        
        return (
            <div className={isDetails?"qqmusic-control show":'qqmusic-control'}>
                <div className="qqmusic-control-content">
                    <div className="qqmusic-control-top">
                        <img onClick={this.comeback} className="icon-control-down" src={require("@/assets/images/icon-control-down.png")}  />
                        <p className="music-name">{music.title}</p>
                    </div>
                    <div className={isPlay?'qqmusic-control-middle active': 'qqmusic-control-middle'}>
                        <Carousel autoplay={false}>
                            {
                                [
                                    (
                                        <div key="1" className="carousel-one">
                                            <p className="music-signer">{music.author}</p>
                                            <img className="music-cover" src={music.pic} />
                                        </div>

                                    ),
                                    (
                                        <div key="2" className="carousel-two" >
                                            暂无歌词

                                        </div>
                                    )
                                ]
                            }
                        </Carousel>

                    </div>
                    <div className="qqmusic-control-bottom">
                        <div className="qqmusic-control-progress">
                            <span className="currentPlayTime"></span>
                            <div ref="progressParent" className="progress-wrapper">
                                <div className="progress-inner" ></div>
                                <span className="progress-btn"  ></span>
                            </div>
                            <span className="totalPlayTime"></span>
                        </div>
                        <div className="qqmusic-control-btns">
                            <img className="prev" src={require("@/assets/images/icon-music-prev.png")} onClick={this.prevMusic} />
                            <img onClick={this.goPlay} className="status" src={isPlay ? require("@/assets/images/icon-control-pause.png") : require("@/assets/images/icon-control-play.png")} />
                            <img className="next" src={require("@/assets/images/icon-music-next.png")} onClick={this.nextMusic} />
                        </div>
                    </div>
                </div>
                <div className="qqmusic-control-bg" style={{ backgroundImage: `url(${music.pic}` }}></div>
                <div className="qqmusic-control-bg-mask"></div>
            </div>
        )
    }
}
export default SongDetails