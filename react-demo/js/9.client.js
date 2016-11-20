/**
 * Created by MWei2 on 11/20/2016.
 */
var Suggestion = React.createClass({
    getInitialState:function(){
        return {}
    },
    handleChange:function(){
        var value = this.refs.input.value;
        $.ajax({
           url:"http://www.baidu.com/su",
            type:"get",
            jsonp:"cb",
            dataType:"jsonp",
            data:{wd:value},
            processData:true,
            context:this,
            success:function(res){
                var data = res.s;
                data = data.map(function(item,index){
                    return <li key={index}>{item}</li>
                });
                this.setState({content:data});
            }
        })
    },
    render:function(){
        return (
            <div>
                <input type="text" ref="input" onChange={this.handleChange}/>
                <ul>
                {this.state.content}
                    </ul>
            </div>
        )
    }
})

ReactDOM.render(<Suggestion/>,document.getElementById("app"))