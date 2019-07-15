

import React, { Component } from 'react';
import "./style.scss"
import {connect} from "react-redux";
import NewSongMenu from '../newSongMenu';
import AllSongMenu from '../allSongMeng';

@connect(
    state=>{
        return {
            list:state.data.list
        }
    }
)
class SongMenu extends Component {
    state = {
        isStyle: 1,
        // list: [],
        img: require('@/assets/images/icon-songmenu-add.png'),
        isNewSongMenu:false,
        isAllSongMenu:false,

    }
    goAllList=()=>{
        this.goAllSongMenu()
    }
    goAddSongMenu=()=>{
        // history.push('/newSongMenu')
        this.setState({
            isNewSongMenu:!this.state.isNewSongMenu
        })
    }
    add=()=>{
        this.setState({
            isStyle:1
        })
    }
    save=()=>{
        this.setState({
            isStyle:2 
        })
    }
    goAllSongMenu=()=>{
        this.setState({
            isAllSongMenu:!this.state.isAllSongMenu
        })
    }
    render() {
        const { isStyle, img ,isNewSongMenu,isAllSongMenu} = this.state
        const{list}=this.props
        // console.log(this.props)
        return (
            <div className="song-par">
                <div className='song-top'>
                    <span className={isStyle == 1 ? 'one two' : 'one'} onClick={this.add}>自建歌单</span>
                    <span>|</span>
                    <span className={isStyle == 2 ? 'one two' : 'one'} onClick={this.save}>收藏歌单</span>
                    <i className='ico1' onClick={this.goAddSongMenu}></i>
                    <i className='ico2' onClick={this.goAllSongMenu}></i>
                </div>
                <div className="addMenu" style={isStyle==2?{display:'none'}:{display:'block'}}>
                    <ul style={list.length > 0 ? { display: 'block' } : { display: 'none' }} className='addMenu-par'>
                        {
                            list.map((item, i) => {
                                return (
                                    <li className="songmenu-item" key={i} onClick={this.goAllList}>
                                        <div className="left">
                                            <img className="logo" src={require("@/assets/images/icon-qqMusic-logo.png")} />
                                        </div>
                                        <div className="right">
                                            <p className="name">{item}</p>
                                            <p className="num border-bottom">0首</p>
                                            <span className="icon-right"></span>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div onClick={this.goAddSongMenu} className='addNew' style={list.length > 0 ? { display: 'none' } : { display: 'flex' }} >
                        <div className="add-songmenu-wrapper-left">
                            <img className="add-songmenu-img" src={img}  />
                        </div>
                        <div className="add-songmenu-wrapper-right">
                            <p className="add-songmenu-text border-bottom">新建歌单</p>
                        </div>
                    </div>
                    
                </div>
                <div  style={isStyle==2?{display:'block'}:{display:'none'}}>
                        <h4 style={{color:'red',fontSize:18,textAlign:"center",lineHeight:'90px'}}>收藏功能暂未开放</h4>              
                    </div>
                <NewSongMenu isNewSongMenu={isNewSongMenu} goAddSongMenu={this.goAddSongMenu} goAllSongMenu={this.goAllSongMenu}/>
                <AllSongMenu isAllSongMenu={isAllSongMenu} goAllSongMenu={this.goAllSongMenu}/>
            </div>
        )
    }
}
export default SongMenu