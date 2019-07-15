import {GETPLAYYIBO ,GETPLAYSONG, GETNEWSONGMENU, DESCMENU, GETSONG, TYPESETTING, CLOSEONESONG, PLAYONESONG, CLOSEALLSONG, GETSEARCHSONG, GETPLAY, NEXTSONHG, GETSINGERSONG, GETXIANGQING, GETPAIHANG, GETYIBOGEQU } from "../action";

const defaulState = {
    isPlay: false,
    shou: [],
    list: [],
    url: [],
    music: {},
    search: [],
    singerSong: "",
    songList: [],
    yiBoGeQu: [],
}
function isDescMenu(item, arr) {
    return arr.some(m => {
        return m === item
    })
}
export const data = (state = defaulState, action) => {
    switch (action.type) {
        case GETPLAYYIBO:
            return {...state,music:action.val}
        case GETYIBOGEQU:
            const newYiBO = state.yiBoGeQu.some(item => item.title === action.val.title)
            if(newYiBO) {
                return { ...state, }
            }
            else {
                
                return { ...state, state: state.yiBoGeQu.unshift(action.val)}

            }
            // const newYiBO=state.yiBoGeQu.unshift(action.val)
            break;
        case GETPAIHANG:
            const songone = state.shou.some((item) => item.title === action.val.name)
            console.log(songone)
            action.val.title = action.val.name
            action.val.author = action.val.singer
            if (!songone) {
                return { ...state, state: state.shou.unshift(action.val), music: action.val }
            } else {
                return { ...state ,music:action.val}
            }
            break;
        case GETPLAYSONG:
            const song = state.shou.some((item) => item.title === action.val.title)
            console.log(song)
            if (!song) {
                return { ...state, state: state.shou.unshift(action.val), music: action.val }
            } else {
                return { ...state,music:action.val}
            }
            // return  { ...state }
            break;
        case GETXIANGQING:
            return { ...state, songList: action.val }
            break;
        case GETSINGERSONG:
            return { ...state, singerSong: action.val }
            break;
        case NEXTSONHG:
            return { ...state, music: action.val }
            break;
        case GETPLAY:
            return { ...state, isPlay: !state.isPlay }
            break;
        case GETNEWSONGMENU:
            return { ...state, list: [...state.list, action.val] }
            break;
        case GETSONG:
            return { ...state, music: action.music }
            break;
        case TYPESETTING:
            return { ...state, shou: [...state.shou, action.typelist] }
            break;
        case DESCMENU:
            const newSong = state.list.filter((item => {
                return !isDescMenu(item, action.arr)
            }))
            // console.log(newSong)          
            return { ...state, list: [...newSong] }
            break;
        case CLOSEONESONG:
            const newshou = state.shou.filter((item) => item.title !== action.one)
            // console.log(action.one)
            // console.log(newshou)
            if (action.one !== state.music.title) {
                return { ...state, shou: newshou }
            } else {
                return {
                    ...state,
                    music: newshou.length > 0 ? newshou[0] : {},
                    shou: newshou
                }
            }
            break;
        case CLOSEALLSONG:
            return { ...state, shou: [], music: {} }
            break;
        case PLAYONESONG:
            const newsong = state.shou.filter((item) => item.title === action.val)
            // console.log(newsong)
            return {
                ...state,
                music: { ...newsong[0] }
            }
            break;
        case GETSEARCHSONG:
            // console.log(state.shou, action.val)
            const newSearchsong=state.shou.some((item=>item.title===action.val.title))
            if(newSearchsong){
                return {...state,music:action.val}
            }else{

                return { ...state, state: state.shou.unshift(action.val), music: action.val }
            }
            break;
        default:
            return state
            break;
    }
}