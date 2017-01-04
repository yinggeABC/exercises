/**
 * Created by weimin on 17-1-4.
 */
    import React,{Component} from "react";
class Counter extends Component{
    render(){
        return (
            <div>
                <h1>一共点击{this.props.value}次</h1>
                <button className="btn btn-primary" onClick={this.props.onInc}>点我加一</button>
                <button className="btn btn-success" onClick={this.props.onDec}>点我减一</button>
            </div>
        )
    }
}

export default Counter;