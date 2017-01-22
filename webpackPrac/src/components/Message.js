/**
 * Created by MWei2 on 1/22/2017.
 */
import React,{Component} from "react"
export default class Message extends Component{
    componentWillReceiveProps(nextProps){
        console.log("receive props");

    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate")
        return true;
    }

    componentWillUpdate(){
        console.log("component will update")
    }

    componentDidUpdate(){
        console.log("component did update")
    }

    componentWillMount(){
        console.log("will mount")
    }

    render(){
        console.log("render~")
        return <span>{this.props.val}</span>
    }

    componentDidMount(){
        console.log("did mount~")
    }

    componentWillUnmount(){
        console.log("will unmount~")
    }
}