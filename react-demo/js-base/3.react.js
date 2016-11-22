/**
 * Created by MWei2 on 11/21/2016.
 */
var Greet = React.createClass({
    render:function(){
        return (<div>
            Hello, {this.props.name}
            </div>)
    }
})

ReactDOM.render(<Greet name="John"/>,document.getElementById("app"))