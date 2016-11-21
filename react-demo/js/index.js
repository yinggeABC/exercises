/**
 * Created by weimin on 16-11-20.
 */
var Comment = React.createClass({
    getInitialState:function(){
        return {
            msg:"输入评论",
            messages:this.props.messages
        }
    },
    handleClick:function(){
       var val= this.refs.txt.value;
        localStorage.setItem("messages",JSON.stringify(this.state.messages));
       this.state.messages.push(val);
        this.setState({"message":this.state.messages});
        this.refs.txt.value='';
    },
    clear:function(){
       this.refs.txt.value='';
    },
    render:function(){
        return (
            <div>
                <h1>{this.props.title}</h1>
              <input type="text" defaultValue={this.state.msg} onChange={this.input} onFocus={this.clear} ref="txt"/>
              <button type="button" onClick={this.handleClick}>发表评论</button>
            <ul>
              {
                  this.state.messages.map(function(message,index){
                  return <li key={index}>{message}</li>
              })
              }
            </ul>
            </div>
        )
    }
})

var msgObj = {
    title:"评论部分",
    messages:JSON.parse(localStorage.getItem("messages"))||[]
}
ReactDOM.render(<Comment {...msgObj}/>,document.getElementById("app"));