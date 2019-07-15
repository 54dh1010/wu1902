




import React, { Component } from 'react';
import { Photo } from '../../components/upPhoto';
import "./style.scss";
import { Grid, Modal ,Toast} from "antd-mobile"
import SongMenu from '../../components/songmenu';
import { connect } from "react-redux";
import HistoryPlay from '../../components/historyPlay';
import {history} from "&"
const alert = Modal.alert;

@connect(
    state => {
        return {
            ...state.data
        }
    }
)
class My extends Component {
    state = {
        ico1: require('@/assets/images/icon-user-audition.png'),
        ico2: require('@/assets/images/icon-user-dredge.png'),
        ico3: require('@/assets/images/run.jpg'),
        ico4: require('@/assets/images/style.jpg'),

        arr: [
            {
                text: '本地歌曲',
                imgSrc: require('@/assets/images/icon-grid-music.png')
            },
            {
                text: '下载歌曲',
                imgSrc: require('@/assets/images/icon-grid-download.png')
            },
            {
                text: '最近播放',
                imgSrc: require('@/assets/images/icon-grid-recent.png')
            },
            {
                text: '我喜欢',
                imgSrc: require('@/assets/images/icon-grid-favorite.png')
            },
            {
                text: '下载MV',
                imgSrc: require('@/assets/images/icon-grid-mv.png')
            },
            {
                text: '已购音乐',
                imgSrc: require('@/assets/images/icon-grid-buy.png')
            }
        ],
        isGoHIstoryPlay: false,
        username: '',


    }
    componentWillMount() {
        if (sessionStorage.username) {
            this.setState({
                username: sessionStorage.username
            })
        }
    }
    goToPLayer = (val) => {
        // console.log(val)
        if (val.text == "最近播放") {
            this.goPlayer()
        }
        if (val.text == "下载歌曲") {
            if (!sessionStorage.token) {
                alert('未登录', '请先登录', [
                    { text: '取消', },
                    { text: '确定', onPress: () => history.push('/login') },
                ])
            }else{
                Toast.fail('暂未开放')
            }
        }
    }
    goPlayer = () => {
        this.setState({
            isGoHIstoryPlay: !this.state.isGoHIstoryPlay
        })
    }
    render() {
        const { ico1, ico2, ico3, ico4, arr, isGoHIstoryPlay, username } = this.state
        const { yiBoGeQu } = this.props
        return (
            <div className='body'>
                <div className='body-top-img'>
                    <div className='icon-par'>
                        <img className="icon" src={ico1} />
                        <span>0分钟</span>
                    </div>

                    <div className="body-top">
                        <Photo />
                    </div>
                    <div className='icon-par'>
                        <img className="icon" src={ico2} />
                        <span>会员</span>
                    </div>
                </div>
                <div className="username">
                    {username ? username : '未登录'}
                </div>
                <Grid
                    columnNum={3}
                    data={arr}
                    hasLine={false}

                    renderItem={item => (
                        <div className='all-par' onClick={() => this.goToPLayer(item)}>
                            <img className="icon" src={item.imgSrc} alt="" />
                            <p className="text">{item.text}</p>
                            {item.text == '最近播放' ? <span onClick={this.goToPLayer} style={{ color: 'red', fontSize: 16 }}>{yiBoGeQu.length}首</span> : ''}
                        </div>
                    )}
                />
                <div className='style'>
                    {/* <div className='one'>
                        <img className='icon' src={ico3} alt=""/>
                        <div className='menu'>
                            <h4>个性电台</h4>
                            <p>偶遇身边好音乐</p>
                        </div>
                    </div> */}
                    {/* <div className='one'>
                        <img className='icon' src={ico4} alt="" />
                        <div className='menu'>
                            <h4>跑步电台</h4>
                            <p>QQ音乐 x Nike，让运动乐在其中</p>
                        </div>
                    </div> */}
                </div>


                <SongMenu />
                <HistoryPlay isGoHIstoryPlay={isGoHIstoryPlay} goPlayer={this.goPlayer} />
            </div>
        )
    }
}
export default My