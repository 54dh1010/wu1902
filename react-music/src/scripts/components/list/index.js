




import React, { Component } from 'react';
import Item from '../item';
import {connect} from "react-redux";
@connect(
    state=>{
        return{

            data:state.data
        }
    }
)
class SingerList extends Component {

    
    render() {
        const{
            items,
            
        }=this.props
        // console.log(this.items)

        return (
            <div>
                  {
                        items.map((item,i)=>{
                            return (
                                <Item key={i} item={item}>

                                </Item>
                            )
                        })
                    }            
            </div>
        )
    }
}

export default SingerList