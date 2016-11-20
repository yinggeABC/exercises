/**
 * Created by MWei2 on 11/20/2016.
 */
var Input = React.createClass({
    getInitialState:function(){
        return {value:"珠峰培训"}
    },
    handleChange:function(event){
        this.setState({value:event.target.value});
    },
    render:function(){
        var value = this.state.value;
        return (
            <div>
        <input type="text" value={value} onChange={this.handleChange}/>
                <p>{value}</p>
                </div>
        )
    }
})

ReactDOM.render(
    <Input/>,
    document.getElementById("app")
)