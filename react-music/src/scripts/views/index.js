




import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import {Guide}  from "./guide";
import { App } from "./App";
import Login from './login';
import Slider from '../components/silder';

export class View extends Component {
    render() {
        return (
            
             
          
                <Router
                    basename="/"
                >
                    <div id="main">
                        <Route component={Layout} />
                    </div>
                </Router>

           
        )
    }
}
class Layout extends Component{
    render(){
        return (          
                <Switch>
                    <Route  path="/"  component={Guide} exact />
                    <Route  path="/guide"  component={Guide}  />
                    <Route  path="/app"  component={App}  />  
                    <Route path="/login" component={Login}/>
                    <Route path="/slider" component={Slider}/>

                    <Route    render={
                        ()=>(<Redirect to='/app/my' />)
                    }/>
                </Switch>

           
        )
    }
}