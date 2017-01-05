/**
 * Created by weimin on 17-1-4.
 */
import React,{Component} from "react"

const marginStyle = {
    marginRight:10
}

class Calculator extends Component{

    render(){
        let {onInput1,onSelect,onInput2,onCalc,res} = this.props;
        return (
            <div>
                <input style={marginStyle} onChange={onInput1} />
                <select style={marginStyle} onChange={onSelect}>
                    <option value="1">+</option>
                    <option value="2">-</option>
                    <option value="3">x</option>
                    <option value="4">÷</option>
                </select>
                <input style={marginStyle} onChange={onInput2}/>
                <button style={marginStyle} onClick={onCalc}>=</button>
                <span>{res}</span>
            </div>
        )
    }
}

export default Calculator;