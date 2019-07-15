import React, { Component } from 'react';
import "./style.scss"
import { List, Tabs} from "antd-mobile"
import {axios} from '&'
import SingerList from '../list';
const Item = List.Item;

class FenLei extends Component {
    state = {
        type: [],
        allSinger:[],
    }
    componentDidMount(){
        if(this.state.type.length<=0){
            axios.get('https://v1.itooi.cn/tencent/mv/category')
            .then(res=>{
                // console.log(res.data.data.area)
                const arr=res.data.data.area.map((item)=>{
                    item.title=item.name
                    return item
                })
                this.setState({
                    type:arr
                })
            })
        }
        if(this.state.allSinger.length<=0){
            axios.get('https://v1.itooi.cn/tencent/artist/list')
                .then(res => {
                    // console.log(res.data.data)
                    this.setState({
                        allSinger: res.data.data
                    })
                })
        }


    }
    comeback=()=>{
        this.props.goToFenLei()
    }
    render() {

        const { type ,allSinger} = this.state
        const{isGoFenLei}=this.props
        // console.log(this.state.allSinger)
        return (

            <div className={isGoFenLei?'fenlei-par show':'fenlei-par'}>
                <div className='fenlei-top'>
                    <img className="fenlei-icon" src={require("@/assets/images/icon-arrow-left.png")} onClick={this.comeback} />
                    <p className="fenlei-title">歌手分类</p>
                    <span></span>
                </div>
                <Tabs tabs={type}
                    initialPage={0}
                    tabBarUnderlineStyle={{ border: "2px solid red" }}
                    tabBarActiveTextColor="red"
                    
                >
                    {
                        type.map((item, i) => {
                            return (
                                <SingerList
                                key={i}
                                type={item}
                               items={allSinger.filter((m,i)=>m.country===item.title)}
                               />
                               
                            )
                        })
                    }
                </Tabs>




            </div>
        )
    }
}
export default FenLei