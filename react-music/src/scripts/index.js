


import React ,{Component} from 'react';
import ReactDom ,{render}from "react-dom"  // 渲染组件  ReactDOM.render()
import {View} from "./views"
import store from "./store"

import {Provider} from "react-redux"
class App extends Component {
    render() {
        return (
            <div className='box'>
             
                <View/>
            </div>
        )
    }
}
// ReactDOM.render(根组件,根节点)
// ReactDom.render(
//     <Provider store={store}>
//         <App/>
//     </Provider>,
//     document.getElementById('root')
// )
const hot=()=>{
    render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById('root')
    )
}
hot()
// store.subscribe(hot)