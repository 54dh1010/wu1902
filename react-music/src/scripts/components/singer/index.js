

import React, { Component } from 'react';
import "./style.scss"
import { List, Toast } from "antd-mobile"
import SingerSong from '../singerSong';
import { connect } from "react-redux"
import { getSingerSong } from '../../action';
import { axios } from "&"
import { getXiangQing } from '../../action';
const Item = List.Item;

@connect(
    state => {
        return {
        }
    }
)
class Singer extends Component {
    state = {
        singers: [

        ],
        isSingerSong: false,
    }
    comeback = () => {
        this.props.goSinger()
    }
    goSearch = () => {

    }
    componentDidMount() {
        if (this.state.singers == '') {

            axios.get('https://v1.itooi.cn/tencent/artist/list')
                .then(res => {
                    // console.log(res.data.data)
                    this.setState({
                        singers: res.data.data
                    })
                })
        }
    }
    toSingerSong = (val) => {
        // console.log(val)
        const { dispatch } = this.props
        dispatch(getSingerSong(val))
        this.toSing()
        // console.log(this.props.singerSong)
        axios.get('https://api.apiopen.top/searchMusic', {
            params: {
                name: val.singer_name
            }
        }).then(res => {
            // console.log(res.data)
            const { dispatch } = this.props
            dispatch(getXiangQing(res.data.result))
        })
    }
    toSing = () => {
        this.setState({
            isSingerSong: !this.state.isSingerSong
        })
    }
    render() {
        const { isGoSinger } = this.props
        const { singers, isSingerSong } = this.state
        return (
            <div className={isGoSinger ? 'singer-par show' : 'singer-par'}>
                <div className='singer-top'>
                    <img className="singer-icon" src={require("@/assets/images/icon-arrow-left.png")} onClick={this.comeback} />
                    <p className="singer-title">歌手</p>
                    <img className="singer-icon" src={require("@/assets/images/icon-search-default.png")} onClick={this.goSearch} />

                </div>
                <ul className='singer-item'>
                    {
                        singers.map((item, i) => {
                            return (
                                <Item key={i} arrow="horizontal"
                                    multipleLine platform="android"
                                    onClick={() => this.toSingerSong(item)}
                                >
                                    {item.singer_name}
                                </Item>
                                // <li className="qqmusic-search-list-item border-bottom" key={i} onClick={this.toSingerSong.bind(this, item)}>
                                //     {item.singer_name}
                                // </li>
                            )
                        })
                    }
                </ul>
                <SingerSong isSingerSong={isSingerSong} toSing={this.toSing} />
            </div>
        )
    }
}
export default Singer