

import React, { Component } from 'react';
import './style.scss'
import { List } from "antd-mobile"
import { axios } from "&"
import { connect } from "react-redux";
import { getPaiHangSong, getPlay ,getYiBo} from '../../action';
const Item = List.Item;
@connect(
    state => {
        return {
            ...state.data
        }
    }
)
class PaiHang extends Component {
    state = {
        paiGedan: [],
    }
    comeback = () => {
        this.props.ToPaiHang()
    }
    componentWillMount() {
        axios.get('https://v1.itooi.cn/tencent/topList?id=26&pageSize=100&page=0&format=1')
            .then(res => {
                // console.log(res.data.data)
                this.setState({
                    paiGedan: res.data.data
                })
            })
    }
    toPlayPaiHang = (val) => {
        console.log(val)
        console.log(this.props.shou,this.props.music)
        const{dispatch,isPlay}=this.props
        dispatch(getPaiHangSong(val))
        dispatch(getYiBo(val))
            if(!isPlay){
                dispatch(getPlay())
            }
    }
    render() {
        const { isPaiHang } = this.props
        const { paiGedan } = this.state

        return (
            <div className={isPaiHang ? 'paihang-par show' : 'paihang-par'}>
                <div className='paihang-top'>
                    <img className="paihang-icon" src={require("@/assets/images/icon-arrow-left.png")} onClick={this.comeback} />
                    <p className="paihang-title">排行榜</p>
                    <span></span>
                </div>
                <div className='paihang-item'>
                    {
                        paiGedan && paiGedan.map((item, i) => {
                            return (
                                <Item key={i} arrow="horizontal"
                                    multipleLine platform="android"
                                    onClick={() => this.toPlayPaiHang(item)}
                                    className='paihang-song'
                                >
                                    <span className='paihang-name'>{item.name}</span>
                                    <span className='paihang-singer'>{item.singer}</span>



                                </Item>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default PaiHang