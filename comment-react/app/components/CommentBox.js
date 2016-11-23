/**
 * Created by weimin on 16-11-22.
 */
import $ from "jquery";
import React from "react";
import CommentList from "./CommentList.js";
import CommentForm from "./CommentForm.js";
import "bootstrap/dist/css/bootstrap.css";
class CommentBox extends React.Component{
    constructor(props){
        super(props);
        this.state={comments:[]};
        this.getComments();
    }

    handleCommentSubmit(comment){
        this.setState({comments:this.state.comments.concat(comment)});
    }

    getComments(){
        $.ajax({
            url:this.props.url,
            dataType:"json",
            cache:false,
            success:data=>{
                this.setState({comments:data});
            }
        })
    }
    render(){
        return (
            <div className="row">
                <div className="col-xs-12">
                    <div className="page-header">
                        <h1>评论</h1>
                    </div>
                    <CommentList data={this.state.comments}></CommentList>
                </div>
                <div className="col-xs-12">
                    <CommentForm handleCommentSubmit={this.handleCommentSubmit.bind(this)}></CommentForm>
                </div>
            </div>
        )
    }
}

export default CommentBox;