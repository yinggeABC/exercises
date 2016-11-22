/**
 * Created by MWei2 on 11/21/2016.
 */
var Comp = React.createClass({
    render:function(){
        return (<ol>
        {React.Children.map(this.props.children,function(child){
            return <li>{child}</li>
        })}
        </ol>)
    }
})

ReactDOM.render(
    <Comp>
        <span>Lily</span>
        <span>Lucy</span>
    </Comp>
    ,document.getElementById("app"));