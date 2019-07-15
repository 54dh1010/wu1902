import React from 'react';
import { NavLink } from 'react-router-dom';
import { Popover, Toast } from 'antd-mobile';
import './style.scss';
import Search from '../../views/search';
import Slider from '../silder';

const Item = Popover.Item;

export class Head extends React.Component {
    state = {
        docked: false,
        isSearch: false,
        popover:false,
    }
    openChange=()=>{
        const {docked} = this.state;
        this.setState({
            docked: !docked
        });
    }
    searchChange=()=>{ 
        const {isSearch} = this.state;
        this.setState({
            isSearch: !isSearch
        });
    }
    popoverChange=(visible)=>{
        this.setState({
            popover:visible
        });
    }
    popoverSelect=(options)=>{
        if(options.key==="1"){
            Toast.offline('听歌识曲功能未开放', 1);
        }else if(options.key==="2"){
            Toast.offline('扫一扫功能未开放', 1);
        }
        this.setState({
            popover:false
        });
    }
    render(){
        const {popover,docked,isSearch} = this.state;
        const {isDetails} = this.props;
        return (
            // <div className='qqmusic-home'>
                <div className="qqmusic-header">
                    <div className="top">
                        <i className="icon-left" onClick={this.openChange}></i>
                        <NavLink className="qqmusic-tab" activeClassName="qqmusic-tab-active" to="/app/my" replace>我的</NavLink>
                        <NavLink className="qqmusic-tab" activeClassName="qqmusic-tab-active" to="/app/music" replace>音乐馆</NavLink>
                        <NavLink className="qqmusic-tab" activeClassName="qqmusic-tab-active" to="/app/find" replace>发现</NavLink>
                        <Popover mask style={{left:0,right:0}}
                            visible={popover}
                            overlay={[
                                (<Item className='keys' key="1" value="scan"><img className="popover-item-img" src={require('@/assets/images/icon-popover-discriminate.png')}/><font className="popover-item-text">听歌识曲</font></Item>),
                                (<Item className='keys' key="2" value="sweep"><img className="popover-item-img" src={require('@/assets/images/icon-popover-sweep.png')}/><font className="popover-item-text">扫一扫</font></Item>),
                            ]}
                            onVisibleChange={this.popoverChange}
                            onSelect={this.popoverSelect}
                        ><i className="icon-right" onClick={this.popoverChange.bind(this,true)}></i></Popover>
                    </div>
                    <div className="bottom" onTouchStart={this.searchChange}>
                        <div className="search">
                            <i className="search-icon"></i>
                            <span className="text">搜索</span>
                        </div>
                    </div>
                    <Slider docked={docked} openChange={this.openChange}/>
                    <Search isSearch={isSearch} searchChange={this.searchChange}/>
                </div>
            // </div>
        );
    }
}
// export default Head;