





import { Route, Switch, Redirect } from "react-router-dom"
import React, { Component } from 'react';
import Home from "../home";
import  My from "../my";
import Find from "../find";
import Footer from "../../components/footer"
import { Head } from "../../components/head";
import "./style.scss"
export class App extends Component {
    render() {
        return (
            <div className='box'>
                <Head />
                <Switch>
                    <Route path="/app/music" component={Home} />
                    <Route path="/app/my" component={My} />
                    <Route path="/app/find" component={Find} />
                    <Route render={
                        () => (<Redirect to="/app/my" />)
                    } />
                </Switch>
                <Footer />
            </div>
        )
    }
}