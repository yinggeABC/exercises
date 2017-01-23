/**
 * Created by MWei2 on 1/22/2017.
 */
import React,{Component} from "react"
import {Link} from "react-router"

export default class NavLink extends Component{
    render(){
       return (
        <Link to={this.props.url} activeClassName="active">{this.props.name}</Link>
       )
    }
}