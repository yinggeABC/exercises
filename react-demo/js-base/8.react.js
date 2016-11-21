/**
 * Created by weimin on 16-11-21.
 */
var Comp = React.createClass({
    getInitialState:function(){
        return {like:false}
    },
    click:function(){
      this.setState({like:!this.state.like});  
    },
    render:function(){
        var like = this.state.like?"like":"do not like";
        return (
            <div>
                <p>You {like} it</p>
                <button type="button" onClick={this.click}>Change altitude</button>
            </div>
        )
    }
})

ReactDOM.render(
    <Comp></Comp>,
    document.getElementById("app")
)