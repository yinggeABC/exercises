/**
 * Created by MWei2 on 11/20/2016.
 */
var Input = React.createClass({
    mixins:[React.addons.LinkedStateMixin],
    getInitialState:function(){
        return {msg:"珠峰培训"};
    },
    render:function(){
       var msg = this.state.msg;
        return (
            <div>
                <input type="text" valueLink={this.linkState("msg")}/>
                <p>{msg}</p>
            </div>
        )
    }
})

ReactDOM.render(<Input/>,document.getElementById("app"))