


import React, { Component } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import { history } from "&";

import { connect } from "react-redux";


export class Guide extends Component {
    state = {
        data: [
            require("@/assets/images/pic1.jpg"),
            require("@/assets/images/pic2.jpg"),
            require("@/assets/images/pic3.jpg"),
            require("@/assets/images/pic4.jpg")
        ]
    }
    componentWillMount() {
        if (localStorage.num) {
            localStorage.num++
            if (localStorage.num > 5) {
                history.push('/app/my')
            }
        } else {
            localStorage.num = 1
        }
    }
    go = (i) => {

        if (i == this.state.data.length - 1) {
            setTimeout(() => {

                history.push('/app/my')
            }, 600)
        }
    }

    render() {
        const {
            data
        } = this.state
        return (
            <div>
                <Carousel
                    autoplay={false}
                
                    dots={false}
                    beforeChange={(from, to) => this.go(to)}
                >
                    {data.map((m, i) => (
                        <img
                            key={i}
                            src={m}
                            alt=""
                            style={{ width: '100%', height: '100%', verticalAlign: 'top' }}
                        />
                    ))}
                </Carousel>
            </div>
        )
    }
}