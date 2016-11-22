/**
 * Created by MWei2 on 11/21/2016.
 */
var Title = React.createClass({
    propTypes:{
        title:React.PropTypes.string.isRequired
    },
    getDefaultProps : function(){
        return {
            title:'this title'
        };
    },
    render:function(){
        return (
            <h1> {this.props.title} </h1>
        );
    }
})

var str ="this is a title";
ReactDOM.render(
    <Title title={str}/>,
    document.getElementById("app")
)