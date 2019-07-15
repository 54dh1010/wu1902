

import React, { Component } from 'react';
import "./style.scss"
import { connect } from "react-redux"
import { List, } from "antd-mobile"
import { playSong, getPlay ,getYiBo} from '../../action';

const Item = List.Item;

@connect(
    state => {
        return {
            ...state.data
        }
    }
)
class SingerSong extends Component {
    

    
    songPlay=(val)=>{
        const{dispatch,isPlay}=this.props
        console.log(isPlay)
        dispatch(playSong(val))
        dispatch(getYiBo(val))

        if(!isPlay){
            dispatch(getPlay())
        }
    }
    comeback = () => {
        this.props.toSing()
    }
    render() {
        const { isSingerSong, music, singerSong, songList } = this.props
        // const{songList}=this.state
        // console.log(songList)
        return (
            <div className={isSingerSong ? 'singerSong-par show' : 'singerSong-par'} >
                <div className='singerSong-top' style={{ backgroundImage: `url(${singerSong.singer_pic}` }}>
                    <img className="singerSong-icon" src={require("@/assets/images/icon-arrow-left.png")} onClick={this.comeback} />

                </div>
                <div className='singerSong-center'>
                    <h3>全部歌曲</h3>
                </div>
                <div className='singerSong-list'>

                    {
                      songList&&songList.map((item, i) => {
                            return (
                                <Item key={i} arrow="horizontal"
                                    multipleLine platform="android"
                                    className='singerSong-item'
                                    onClick={() => this.songPlay(item)}
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
export default SingerSong