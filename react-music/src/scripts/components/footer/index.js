

import React, { Component } from 'react'
import "./style.scss"
import { connect } from "react-redux";
import { axios } from "&"
import MusicList from '../musicList';
import { getSong, typeSetting, getPlay ,getYiBo} from "../../action";
import { Toast } from 'antd-mobile';
import SongDetails from '../songDetails';

@connect(
    state => {
        return {
            ...state.data
        }
    }
)
class Footer extends Component {
    state = {
        jpg: require('@/assets/images/pic.jpg'),
        ico1: require('@/assets/images/icon-music-play.png'),
        ico2: require('@/assets/images/icon-music-pause.png'),
        ico3: require('@/assets/images/icon-play-list.png'),
        // music:'',
        isPlay: false,
        isList: false,
        isDetails:false,

    }

    componentWillMount() {
        if (this.props.music !== '') {
            axios.get('https://api.apiopen.top/searchMusic?name=邓紫棋'
                
            ).then(res => {
                // console.log(res.data.result[0])
                const { dispatch } = this.props;
                dispatch(getSong(res.data.result[0]))
                dispatch(typeSetting(res.data.result[0]))
                dispatch(getYiBo(res.data.result[0]))
            })

            // axios.get('https://api.mlwei.com/music/api/?key=523077333&cache=0&type=song',
            //     {
            //         params: {
            //             id: '000cwwze4FkFj4'
            //         }
            //     }
            // ).then(res => {
            //     const { dispatch } = this.props;
            //     dispatch(getSong(res.data))
            //     dispatch(typeSetting(res.data))
            // })

        }
    }
    goSongDetails=()=>{
        this.setState({
            isDetails:!this.state.isDetails
        })
    }
    componentDidUpdate() {
        const {
            isPlay
        } = this.props
        if (isPlay) {
            this.qqmusicAudio.play()
            console.log(this.qqmusicAudio.duration)
        } else {
            this.qqmusicAudio.pause()

        }
    }
    playAndStop = () => {
        if (this.props.music.title !== undefined) {
            const { dispatch } = this.props
            dispatch(getPlay())
            // this.setState({
            //     isPlay: !this.state.isPlay
            // })
        } else {
            Toast.fail('暂无播放歌曲', 1)
        }
    }
    gelist = () => {
        this.setState({
            isList: !this.state.isList
        })
    }
    closeList = () => {
        this.setState({
            isList: !this.state.isList
        })
    }
    render() {
        const { jpg, ico1, ico2, ico3, isList ,isDetails} = this.state;
        const {
            music, isPlay
        } = this.props
        // console.log(this.props)
        // console.log(music,this.props.shou)
        return (
            <footer className='my-footer'>
                <div className="left" onClick={this.goSongDetails}>
                    <img className={isPlay ? 'pic move' : 'pic'} src={music.pic} alt="" />
                </div>
                <div className='center' onClick={this.goSongDetails}>
                    <h4>{music.title}</h4>
                    <p>{music.author}</p>
                </div>
                <p className={music.title == undefined ? "no-music show" : 'no-music'} >QQ音乐 听我想听的歌</p>

                <div className='right'>
                    <audio ref={(audio) => this.qqmusicAudio = audio} src={music.url}></audio>
                    <img onClick={this.playAndStop} className="left" src={isPlay ? ico2 : ico1} alt="" />
                    <img className="right" src={ico3} alt="" onClick={this.gelist} />
                </div>
                <SongDetails playAndStop={this.playAndStop}  isDetails={isDetails} goSongDetails={this.goSongDetails}/>
                <MusicList isList={isList} closeList={this.closeList} playAndStop={this.playAndStop} />
            </footer>
        )
    }
}
export default Footer