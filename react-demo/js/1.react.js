/**
 * Created by MWei2 on 11/20/2016.
 */
/*
var persons=["Lily","Lucy","Susan"];
var style = {
    color:"blue"
};
ReactDOM.render(
    <div>
    {
        persons.map(function(person){
            return <div style={style}>{person}</div>
        })
        }
        </div>,
    document.getElementById("app")
)*/
var Message = React.createClass({
    render: function () {
        return <h1>Hello zfpx</h1>
    }
});

ReactDOM.render(
    <Message/>,
    document.getElementById("app")
)
