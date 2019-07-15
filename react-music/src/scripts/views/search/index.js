

import React, { Component } from 'react';
import { Head } from '../../components/head';
import { SearchBar, WhiteSpace, List ,Toast} from "antd-mobile"
import { connect } from "react-redux";
import "./index.scss"
import { axios } from "&"
import { getSearchSong, getPlay ,getYiBo} from '../../action';
const Item = List.Item;
const Brief = Item.Brief;
@connect(
    state => {
        // console.log(state.data.findGoods)
        return {
            ...state.data
        }
    }
)
class Search extends Component {

    state = {
        isCanGet: true,
        songList: [],
        ishistory: true,
        recordStr:[],
        isShow:false,
    }
    componentWillMount(){
        // console.log(localStorage.record)
        // this.state.recordStr=localStorage.record
        if(localStorage.record){
            this.setState({
                recordStr:localStorage.record.split(',')
            })

        }
    }

    comeback = () => {
        this.props.searchChange()
        this.setState({
            ishistory: true,
            songList:[],
        })
        this.one.state.value="";

    }
    block=(val)=>{     
            document.getElementById('search-block-menu').innerHTML=val
        
    }
    gotosearch=(val)=>{
        console.log(val)
        this.goisshow()
        this.submit(val)
       
        document.getElementById('search-block-menu').innerHTML=''
        
    }
    onChange1=()=>{
        setTimeout(()=>{

            this.goisshow()
           
        },400)
    }
    onChange=()=>{
        if(!this.state.isShow){
            this.goisshow()

        }
    }
    goisshow=()=>{
        this.setState({
            isShow:!this.state.isShow
        })
    }
    submit = (val) => {
        const { dispatch } = this.props
        // console.log(this.one.state.value)
        if(val!=''){
            this.addSearchRecord(val)
            this.setState({
                ishistory: false,
            })           
            axios.get('https://api.apiopen.top/searchMusic',{
                params: {
                    name: val
                }
            }).then(res => {
                // console.log(res.data)
                this.setState({
                    songList: res.data.result,
                })
                this.one.state.value="";
            })
        }else{
            Toast.fail('搜索不能为空', 1)
        }

    }
    // 热搜点击
    hotGoSearch=(a)=>{
        this.submit(a)
        this.one.state.value=a;
        
    }
    // 记录点击
    histortGoSearch=(b)=>{
        console.log()
        this.submit(b)
        this.one.state.value=b;
    }
    desc=(e)=>{
        // if (e.stopPropagation) {
        //     e.stopPropagation();
        // } else {
        //     e.cancelBubble = true;
        // }
        // console.log(e)
    }
    allDesc=()=>{
        localStorage.record='';
        this.setState({
            recordStr:[],
        })

    }
    addMusic = (val) => {
        const{dispatch,isPlay}=this.props
        // console.log(isPlay)
        dispatch(getSearchSong(val));
        // this.props.searchChange()
        this.comeback()
        dispatch(getYiBo(val))

        if(!isPlay){
            dispatch(getPlay())
        }
    }
    //添加记录
    addSearchRecord=(val)=>{
        const{recordStr}=this.state
        const isTrue=!recordStr.some(item=>{
            return item===val
        })
        if(isTrue&&recordStr!==""){
            recordStr.unshift(val);
        }
        this.setState({
            recordStr:[].concat(recordStr)
        });
        // console.log(this.state.recordStr)
        localStorage.record=recordStr.join(',')
    }
    render() {
        const { isSearch } = this.props
        const searchList = ["邓紫棋", "全孝盛", "张靓颖", "周杰伦", "薛之谦", "林俊杰"]
        const { songList, isCanGet, ishistory ,recordStr,isShow} = this.state
        return (
            <div className={isSearch ? "search-par show" : "search-par"}>
                <div className='top'>
                    <img  className="icon" src={require("@/assets/images/icon-arrow-left.png")} onClick={this.comeback} />
                    <span>音乐搜索</span>
                    <span></span>
                </div>
                <WhiteSpace />
                <SearchBar
                    placeholder="关键字"
                    onSubmit={this.submit}
                    onChange={this.block}
                    maxLength={8} title
                    ref={el=>this.one=el}
            
                    onBlur={ this.onChange1}
                    onFocus={(this.onChange)}
                />
                <div onClick={()=>this.gotosearch(this.one.state.value)} className={isShow?'search-block show':'search-block'}>
                    搜索&nbsp;  <span id='search-block-menu' style={{color:'green',fontSize:18}}></span>
                </div>
                <div className='qqmusic-search-bottom'>
                    <div className='history' style={ishistory ? { flex: 1 } : { display: 'none' }}>
                        <h3>热门搜索</h3>
                        <ul className='history-item'>
                            {
                                searchList.map((item, i) => {
                                    return (
                                        <li key={i} onClick={()=>this.hotGoSearch(item)}>{item}</li>
                                    )
                                })
                            }
                        </ul>
                        <div className='serach-history'>
                            <h3>搜索记录 <span onClick={this.allDesc}>清除历史</span></h3>

                            <div className='search-list' style={recordStr.length > 0 ? { display: 'block' } : { display: 'none' }}>
                                {
                                    recordStr.map((item, i) => {
                                        return (
                                            <div key={i} onClick={()=>this.histortGoSearch(item)}>
                                                <Item onClick={(event)=>this.desc(event)} arrow="horizontal"
                                                    multipleLine platform="android"
                                                >
                                                   
                                                    {item}
                                                </Item>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    

                    <ul  className="qqmusic-search-list" style={songList&&songList.length>0?{display:'block'}:{display:'none'}}>
                        {
                          songList&&songList.map((item, index) => {
                                return (
                                    <li className="qqmusic-search-list-item border-bottom" key={index} onClick={this.addMusic.bind(this, item)}>
                                        <div className="left">
                                            <h4 className="title">{item.title}</h4>
                                            <p className="singer">{item.author}</p>
                                            {/* <p className="intro">{item.album}</p> */}
                                        </div>
                                        <div className="right">
                                            <img className="cover"  src={item.pic} />
                                        </div>
                                    </li>
                                )
                            })
                        }
                        {/* <li className="hint" style={isCanGet ? { display: 'none' } : {}}>正在加载更多...</li> */}
                    </ul>
                   
                </div>


            </div>
        )
    }
}
export default Search