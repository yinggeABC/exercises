/**
 * Created by MWei2 on 1/22/2017.
 */
import React,{Component} from "react";
import ReactDOM,{unmountComponentAtNode} from "react-dom"
import Message from "./Message"
export default class Handler extends Component{
    constructor(){
        super()
        this.state = {val:0,destroy:false}
    }

    update=(e)=>{
        this.setState({
            val:this.state.val+1
        })
    }

    destroy=(e)=>{
        this.setState({
            destroy:true
        })
    }

    remove=()=>{
        unmountComponentAtNode(document.getElementById("app"))
    }

    render(){
        if (this.state.destroy) return null;
        return <div >
            <Message val={this.state.val}></Message>
            <button onClick={this.update}>{this.state.val}</button>
            <button onClick={this.destroy}>组件移除</button>
        </div>
    }

}