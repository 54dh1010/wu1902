
import { axios } from "&"



// 控制音乐播放
export const GETPLAY = 'GETPLAY'
export const getPlay = () => {
    return {
        type: GETPLAY,
        
    }
}  

// 获取歌曲
export const GETSONG = 'getsong'
export const getSong = (music) => {
    return {
        type: GETSONG,
        music
    }
}
// 新建歌单
export const GETNEWSONGMENU = 'GETNEWSONGMENU'
export const getNewSong = (val) => {
    return {
        type: GETNEWSONGMENU,
        val
    }
}
//删除歌单
export const DESCMENU = 'descmenu'
export const deacSongmenu = (arr) => {
    return {
        type: DESCMENU,
        arr
    }
}
// 歌曲排列表
export const TYPESETTING = 'GETNEWSONGMENUdggr'
export const typeSetting = (typelist) => {
    return {
        type: TYPESETTING,
        typelist
    }
}
//将音乐从播放列表中移除
export const CLOSEONESONG = 'closeONeSone'
export const closeOneSong = (one) => {
    return {
        type: CLOSEONESONG,
        one
    }
}
//将所有音乐从播放列表中移除
export const CLOSEALLSONG = 'closeAll'
export const closeAll = () => {
    return {
        type: CLOSEALLSONG,
      
    }
}
//将音乐从播放列表中点击播放
export const PLAYONESONG = 'playOnesong'
export const playOneSong = (val) => {
    return {
        type: PLAYONESONG,
        val
    }
}
//将搜索音乐列表中点击播放 并添加到歌曲单
export const GETSEARCHSONG = 'GETSEARCHSONG'
export const  getSearchSong=(val)=>{

    return {
        type: GETSEARCHSONG,
        val
    }
}
// 上 下一首歌
export const NEXTSONHG = 'NEXTSONHG'
export const  nextSong=(val)=>{

    return {
        type: NEXTSONHG,
        val
    }
}
// 点击歌手 进入详情歌单
export const GETSINGERSONG = 'GETSINGERSONG'
export const  getSingerSong=(val)=>{
    return {
        type: GETSINGERSONG,
        val
    }
}
// 点击歌手 获取详情单
export const GETXIANGQING = 'GETXIANGQING'
export const  getXiangQing=(val)=>{
    return {
        type: GETXIANGQING,
        val
    }
}

// 点击详情歌 播放
export const GETPLAYSONG = 'GETPLAYSONG'
export const  playSong=(val)=>{
    return {
        type: GETPLAYSONG,
        val
    }
}
// 点击排行 播放
export const GETPAIHANG = 'GETPAIHANG'
export const  getPaiHangSong=(val)=>{
    return {
        type: GETPAIHANG,
        val
    }
}
//添加已播歌曲
export const GETYIBOGEQU = 'GETYIBOGEQU'
export const  getYiBo=(val)=>{
    return {
        type: GETYIBOGEQU,
        val
    }
}
//已播歌曲 点击播放
export const GETPLAYYIBO = 'GETPLAYYIBO'
export const  getPlayYiBo=(val)=>{
    return {
        type: GETPLAYYIBO,
        val
    }
}


