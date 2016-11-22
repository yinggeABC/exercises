/**
 * Created by weimin on 16-11-22.
 */
import React from "react";
class CommentForm extends React.Component{
    handleSubmit(event){
       event.preventDefault();
        var author = this.refs.username.value;
        var text=this.refs.text.value;
        this.props.handleCommentSubmit({author:author,text:text,date:"刚刚"})

    }
    render(){
        return (
            <form role="form" className="form form-horizontal" onSubmit={this.handleSubmit.bind(this)}>
               <div className="form-group">
                   <div className="col-xs-2">
                       <label htmlFor="username" className="control-label">姓名</label>
                   </div>
                  <div className="col-xs-10">
                      <input type="text" className="form-control" ref="username" id="username"/>
                  </div>
               </div>
                <div className="form-group">
                    <div className="col-xs-10 col-xs-offset-2">
                        <textarea name="msg" id="msg" cols="80" rows="10" ref="text"></textarea>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">提交评论</button>
            </form>
        )
    }
    componentDidUpdate(){
        this.refs.username.value='';
        this.refs.text.value='';
    }
}
export default CommentForm;