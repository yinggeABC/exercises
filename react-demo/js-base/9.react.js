/**
 * Created by weimin on 16-11-21.
 */
var Hello = React.createClass({
    getInitialState:function(){
        return {opacity:1.0}
    },
    render:function(){
        return (
            <div style={{opacity:this.state.opacity}}>
                Hello {this.props.name}
            </div>
        )
    },
    componentDidMount:function(){
        this.timer = setInterval(function(){
            this.state.opacity -=0.05;
            if (this.state.opacity<=0) this.state.opacity=1;
            this.setState({opacity:this.state.opacity});

        }.bind(this),100)
    }
})

ReactDOM.render(<Hello name="Jane"></Hello>,document.getElementById("app"));