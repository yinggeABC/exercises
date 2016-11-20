/**
 * Created by MWei2 on 11/20/2016.
 */
var Board = React.createClass({
    getInitialState: function () {
        return {
            msg: '请输入',
            messages:this.props.messages
        };
    },
    render: function () {
        return (
            <div>
                <h1>{this.props.titleRef}</h1>
                <input type="text" ref="txtMsg" defaultValue={this.state.msg} onClick={this.clear}/>
                <input type="button" value='发言' onClick={this.leaveMsg}/>
                <ul>
                    {
                        this.state.messages.map(function (item, index) {
                            return <li key={index}>{item}</li>
                        })
                        }
                </ul>
            </div>
        )
    },
    clear:function(event){
        event.target.value='';
    },
    leaveMsg: function (event) {
        this.state.messages.push(this.refs.txtMsg.value);
        //每次状态都是一个新的state对象
        localStorage.setItem('messages',JSON.stringify(this.state.messages));
        this.setState({
            messages:this.state.messages
        },function(){
            this.refs.txtMsg.value =  '';
        });
    }
})
var data = {
    titleRef: '珠峰留言版',
    messages: JSON.parse(localStorage.getItem('messages'))||[]
}

ReactDOM.render(
    <Board {...data}/>,
    document.getElementById('app')
);