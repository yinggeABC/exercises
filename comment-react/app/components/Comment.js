/**
 * Created by weimin on 16-11-22.
 */
import React from "react";
class Comment extends React.Component{
    render(){
        return (
            <div className="list-group-item">
                {this.props.author}:
                {this.props.date}:
                {this.props.text}
            </div>
        )
        
    }
}

export default Comment;