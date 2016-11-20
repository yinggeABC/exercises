/**
 * Created by MWei2 on 11/20/2016.
 */
var Focus =React.createClass({
    handleClick:function(){
        this.refs.msg.focus();
    },
    render:function(){
        return (
            <div>
                <input type="text" ref="msg"/>
                <input type="button" value="获取焦点" onClick = {this.handleClick}/>
            </div>
        )
    }
})

ReactDOM.render(
    <Focus/>,
    document.getElementById("app")
)