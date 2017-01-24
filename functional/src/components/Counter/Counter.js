/**
 * Created by MWei2 on 1/23/2017.
 */
import React,{Component} from "react"
class Counter extends Component{
    constructor(){
        super()
    }

    render(){
        return <div>
            <h1>计数器总数:{this.props.value}</h1>
            <button className="btn btn-primary" onClick={this.props.onInc}>加一</button>
            <button className="btn btn-success" onClick={this.props.onDec}>减一</button>
        </div>
    }
}

Counter.propTypes = {

}
export default Counter;