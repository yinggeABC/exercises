/**
 * Created by weimin on 17-1-24.
 */
import React,{Component} from "react"
import {Router,Route,browserHistory,IndexRoute} from "react-router"

import Main from "../containers/Main"
import Home from "../components/Home"
import Profile from "../components/Profile"

export default class MainRoute extends Component {
    render(){
        return (  <Router history={browserHistory}>
                <Route path="/" component={Main}>
                    <IndexRoute component={Home}></IndexRoute>
                    <Route path="/profile/:username" component={Profile}></Route>
                </Route>
            </Router>
        )
    }
}

