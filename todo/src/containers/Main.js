/**
 * Created by weimin on 17-1-24.
 */
import SearchGithub from "../components/SearchGithub"
import React,{Component} from "react"

export default class Main extends Component{
    render(){
       return  <div>
            <div className="navbar navbar-default">
                <div className="col-md-7 col-md-offset-3">
                <SearchGithub></SearchGithub>
                </div>
            </div>
            <div className="container">
                {this.props.children}
            </div>
        </div>
    }
}