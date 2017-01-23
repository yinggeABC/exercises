/**
 * Created by MWei2 on 1/22/2017.
 */
import React, {Component} from "react"
import {IndexLink,browserHistory} from "react-router"
import NavLink from "./NavLink"
class App extends Component{
    handleSubmit(e){
        e.preventDefault()
        const name = e.target.elements[0].value;
        const age = e.target.elements[1].value;
        const path = `/about/${name}/${age}`;
        // browserHistory.push(path);
        this.context.router.push(path);
    }

    goBack(){
        this.context.router.goBack();
    }

    render(){
        return (
            <div>
                <h1>Hello react router~~</h1>
                <ul>
                    <li>
                        <IndexLink to="/" activeClassName="active">首页</IndexLink>
                    </li>
                    <li>
                        <NavLink url="/contact" name="联系我们"></NavLink>
                    </li>
                    <li>
                        <NavLink url="/about" name="关于我们"></NavLink>
                    </li>
                    <li>
                        <form action="" onSubmit={this.handleSubmit.bind(this)}>
                            <input type="text" placeholder="name"/>
                            <input type="text" placeholder="26"/>
                            <button type="submit">提交</button>
                            <button onClick={this.goBack.bind(this)}>Go back</button>
                        </form>
                    </li>
                </ul>
            {this.props.children}
            </div>
        )
    }
}

App.contextTypes = {
    router:React.PropTypes.Object
}

export default App;