/**
 * Created by weimin on 16-11-21.
 */
var Comp = React.createClass({
    handleClick:function(){
        this.refs.txt.focus();
        this.refs.txt.value="Hello";
    },
    render:function(){
        return (
            <div>
                <input type="text" ref="txt"/>
                <button type="button" onClick ={this.handleClick}>点击输入</button>
                </div>
        )
    }
})

ReactDOM.render(
    <Comp></Comp>,
    document.getElementById("app")
)