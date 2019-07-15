import React, { Component } from 'react'
import { List, Toast } from "antd-mobile"

import "./style.scss"
import {history} from "&"
const Item = List.Item;

class Slider extends Component {
    closeShadow = () => {
        this.props.openChange()
    }
    loginOut = () => {
        history.push('/login')
    }
    render() {
        const list = [
            {
                img: require('@/assets/images/icon-slider-message.png'),
                title: '升级为VIP',

            },
            {
                img: require('@/assets/images/icon-slider-skin.png'),
                title: '个性化中心',

            },
            {
                img: require('@/assets/images/icon-slider-vip.png'),
                title: '消息中心',

            }
        ];
        const centerList = [
            {
                text: '仅Wi-Fi联网',

            },
            {
                text: '定时关闭',

            },
            {
                text: '免流量服务',

            },
            // {
            //     text: '微云音乐网盘',

            // },
            {
                text: '传歌到手机',

            },
            {
                text: 'QPlay与车载音乐',

            },
            {
                text: '清理占用空间',

            },
            {
                text: '免费WIFI',

            },
            {
                text: '帮助与反馈',

            },
            {
                text: '关于QQ音乐',

            }
        ];
        const { docked } = this.props
        return (
            <div>
                <div className={docked ? 'qq-slider show' : 'qq-slider'}>
                    <div className='slider-top'>
                        {
                            list.map((item, i) => {
                                return (
                                    <div key={i} className='slider-top-item'>
                                        <img src={item.img} alt="" />
                                        <p>{item.title}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='slider-center'>
                        {
                            centerList.map((item, i) => {
                                return (
                                    <Item key={i} arrow="horizontal"
                                        multipleLine platform="android"
                                    >
                                        {item.text}
                                    </Item>
                                )
                            })
                        }
                    </div>
                    <div className='slider-bottom'>
                        <div className='left'>
                            <img src={require('@/assets/images/icon-slider-setting.png')} alt="" />
                            <span>设置</span>
                        </div>
                        <div onClick={this.loginOut} className='right'>
                            <img src={require('@/assets/images/icon-slider-exit.png')} alt="" />
                            <span >退出登录/关闭</span>
                        </div>
                    </div>
                </div>
                <div onClick={this.closeShadow} className={docked ? 'slider-shadow show' : 'slider-shadow'}></div>
            </div>

        )
    }
}
export default Slider