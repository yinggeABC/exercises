/**
 * Created by MWei2 on 1/22/2017.
 */
import React, {Component} from "react"

export default class Contact extends Component{
    render(){
        return <h1>About Us,{this.props.params.message},{this.props.params.id}</h1>
    }
}