import React,{Component} from "react";
import ReactDOM,{render} from "react-dom";
import "./index.css"
class App extends Component{
    render(){
        const name="yingge";
        return (

            <div className="container">
                {/*this is comment*/}
                {name} is here
            </div>
        )
    }
}

render(<App/>,document.getElementById("app"));