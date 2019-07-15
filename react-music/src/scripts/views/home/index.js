





import React, { Component } from 'react';
import { Carousel, Grid } from 'antd-mobile';
import "./index.scss"
import { connect } from "react-redux"
import { axios } from "&"
import Singer from '../../components/singer';
import FenLei from '../../components/fenlei';
import PaiHang from '../../components/paihang';

@connect(
    state => {
        return {
            data: state.data
        }
    }
)
class Home extends Component {
    state = {
        imgs: [
            require("@/assets/images/carousel-cover-one.jpg"),
            require("@/assets/images/carousel-cover-two.jpg"),
            require("@/assets/images/carousel-cover-three.jpg"),
            require("@/assets/images/carousel-cover-four.jpg"),
        ],
        arr:[
            {
                icon: require('@/assets/images/icon-grid-singer.png'),
                text: '歌手'
            },
            {
                icon: require('@/assets/images/icon-grid-rank.png'),
                text: '排行'
            },
            {
                icon: require('@/assets/images/icon-grid-radio.png'),
                text: '电台'
            },
            {
                icon: require('@/assets/images/icon-grid-categories.png'),
                text: '分类歌单'
            },
            {
                icon: require('@/assets/images/icon-grid-video.png'),
                text: '视频MV'
            },
            {
                icon: require('@/assets/images/icon-grid-album.png'),
                text: '数字专辑'
            },
        ],
        isGoSinger:false,
        isGoFenLei:false,
        isPaiHang:false,
      


    }
    goSinger=(val)=>{
        // console.log(val)
        if(val.text=='歌手'){
            
            this.goToSinger()
        }
        if(val.text=='分类歌单'){
        //  console.log(111)
            this.ToFenLei()  
        }
        if(val.text=='排行'){
            console.log(111)
               this.ToPaiHang()  
           }
    }
    goToSinger=()=>{
        this.setState({
            isGoSinger:!this.state.isGoSinger
        })
    }
    ToFenLei=()=>{
        this.setState({
            isGoFenLei:!this.state.isGoFenLei
        })
    }
    ToPaiHang=()=>{
        this.setState({
            isPaiHang:!this.state.isPaiHang
        })
    }
    

    render() {
        const{arr,isGoSinger,isGoFenLei,isPaiHang}=this.state

        return (
            <div className="body">

                <Carousel className="home-swiper"
                    autoplay={true}
                    infinite
                    autoplayInterval={2000}
                >
                    {
                        this.state.imgs.map((item, i) => {
                            return (
                                <a className='tu' key={i} href="javascript:;">
                                    <img src={item} />
                                </a>
                            )
                        })
                    }
                </Carousel>
                <Grid
                    className='home-gird-par'
                    columnNum={3}
                    data={arr}
                    hasLine={false}
                    onClick={el => this.goSinger(el)}
                    renderItem={item => (
                        <div className='home-gird'  >
                            <img className="home-gird-icon" src={item.icon} alt="" />
                            <p className="home-gird-text">{item.text}</p>
                        </div>
                    )}
                />
                <div className='home-center'>

                </div>



            <Singer isGoSinger={isGoSinger} goSinger={this.goToSinger}/>
            <FenLei goToFenLei={this.ToFenLei} isGoFenLei={isGoFenLei} />
            <PaiHang isPaiHang={isPaiHang} ToPaiHang={this.ToPaiHang}/>
            </div>
        )
    }
}
export default Home