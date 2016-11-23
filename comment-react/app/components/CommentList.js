/**
 * Created by weimin on 16-11-22.
 */
import React from "react";
import Comment from "./Comment"
class CommentList extends React.Component{
    render(){
        return (
            <div className="list-group">
                {
                    this.props.data.map(function(item,index){
                       return <Comment author={item.author} date={item.date} key={index} text={item.text}></Comment>
                    })
                }
            </div>
        )
    }


};
export default CommentList;