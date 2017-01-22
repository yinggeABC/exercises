import React from 'react'
import ReactDOM, { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute, Redirect, browserHistory } from 'react-router'
import "./containers/index.css"
import App from './containers/App'
import Contact from "./containers/Contact"
import About from "./containers/About"
import Home from "./containers/Home"
const router = (
    <Router history={browserHistory}>
        <Route path="/" components={App}>
        <IndexRoute components={Home}/>
        <Route path="contact" components={Contact}/>
        <Route path="about/:message/:id" components={About}/>
        <Redirect from="about" to="about/yingge/12"/>
        </Route>
    </Router>
)
// / -> App + Home
// /about/xx/xx
// /about/xx
//  / -> App
// /contact -> App + Contact
// /about -> App + About

render(router, document.getElementById('app'))
