
import React, { Component } from 'react';
import "./style.scss";
import {Checkbox} from 'antd-mobile';


import {connect} from "react-redux";
import { deacSongmenu } from '../../action';
const CheckboxItem=Checkbox.CheckboxItem

@connect(
    state=>{
        return{
            list:state.data.list
        }
    }
)
class AllSongMenu extends Component {
    comeback = () => {
        this.props.goAllSongMenu()
    }
    state = {
        menu: [],
    }
    getcheck=(val,i)=>{
    //   console.log(val,i)
      const{list}=this.props
      const isdesc=list.some(item=>{
          return item===val
      })
    //   console.log(isdesc)

      if(isdesc){
        this.state.menu.push(val)
        this.setState({
            menu:this.state.menu
        })
        // console.log(this.state.menu)
      }
    }
    removeSongMenu=()=>{
        const{dispatch}=this.props
        dispatch(deacSongmenu(this.state.menu))
    }
    render() {
        const { isAllSongMenu ,list} = this.props
        // console.log(this.props)
        // const { list } = this.state
        return (
            <div className={isAllSongMenu ? "par show" : 'par'}>
                <div className="header">
                    <img className="icon" src={require("@/assets/images/icon-arrow-left.png")} onClick={this.comeback} />
                    <p className="title">管理歌单</p>
                    <p></p>
                </div>
                <div className="menu" >
                    <ul className='menu-1' style={list.length > 0 ? { display: 'flex'} : { display: 'none' }}>
                        {
                            list.map((item, i) => {
                                return (
                                    <li className="songmenu-item" key={i}>
                                        <div className="left">
                                            <CheckboxItem className='checkbox'  onChange={()=>this.getcheck(item,i)}>
                                      
                                            </CheckboxItem>
                                        </div>
                                        <div className="center">
                                            <img className="icon" src={require("@/assets/images/icon-qqMusic-logo.png")} />
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
                </div>
                <div className="footer">
                    <div className="delete-wrapper">
                        <img className="delete" onClick={this.removeSongMenu} src={require("@/assets/images/icon-songmenu-delete.png")}/>                                          
                    </div>
                    <p className="text-wrapper">
                        <span className="text" onClick={this.removeSongMenu}>删除</span>
                    </p>
                </div>
            </div>
        )
    }
}
export default AllSongMenu