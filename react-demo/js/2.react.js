/**
 * Created by MWei2 on 11/20/2016.
 */
var Person = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        gender: React.PropTypes.string.isRequired,
        age: React.PropTypes.number.isRequired
    },
    getDefaultProps:function(){
        return {name:"无名氏"}
    },
    render:function(){
        return <h1>{this.props.name},{this.props.gender},{this.props.age}</h1>
    }
});

var props ={
    gender:"boy",
    age:18
}

ReactDOM.render(<Person {...props}/>,document.getElementById("app"));