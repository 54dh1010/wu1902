
import React, { Component } from 'react';
class Item extends Component {
    render() {
        const {
            item
        } = this.props
        // console.log(this.props.item)
        return (
            <div className="box-in">
          
                    
                {item.singer_name}
                
            </div>
        )
    }
}
export default Item