/**
 * Created by MWei2 on 1/22/2017.
 */
import React, {Component} from "react"
import NavLink from "./NavLink"
export default class App extends Component{
    render(){
        return (
            <div>
                <h1>Hello react router~~</h1>
                <ul>
                    <li>
                        <NavLink url="/" name="首页"></NavLink>
                    </li>
                    <li>
                        <NavLink url="/contact" name="联系我们"></NavLink>
                    </li>
                    <li>
                        <NavLink url="/about" name="关于我们"></NavLink>
                    </li>
                </ul>
            {this.props.children}
            </div>
        )
    }
}