/**
 * Created by weimin on 17-1-24.
 */
import React,{Component,PropTypes} from "react"

export default class UserProfile extends Component{
    render(){
        const {username,info} = this.props;
        let {avatar_url,company,email,followers,location,blog,bio} = info;
        return (
            <div>
                <h3>用户信息</h3>
                <ul>
                    {avatar_url && <li className="list-group-item">
                        <img src={avatar_url} className="img-rounded img-responsive" alt=""/>
                    </li>}
                    <li className="list-group-item">Name: {username}</li>
                    <li className="list-group-item">Company: {company}</li>
                    <li className="list-group-item">email: {email}</li>
                    <li className="list-group-item">followers: {followers}</li>
                    <li className="list-group-item">location: {location}</li>
                    <li className="list-group-item">blog: {blog}</li>
                    <li className="list-group-item">bio: {bio}</li>
                </ul>
            </div>
        )
    }
}

UserProfile.propTypes={
    username:PropTypes.string.isRequired,
    info:PropTypes.object.isRequired
}