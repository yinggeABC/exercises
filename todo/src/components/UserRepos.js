/**
 * Created by weimin on 17-1-24.
 */
import React,{Component,PropTypes} from "react"

export default class UserRepos extends Component{
    render(){
        let {repos,username} = this.props;
        return (
            <div>
                <h3>Git Repos</h3>
                <ul className="list-group">
                    {
                        repos.map((repo,index)=>{
                            return (
                                <li className="list-group-item" key={index}>
                                    <h4><a href={repo.html_url}>
                                        {repo.name}
                                    </a></h4>
                                    <p>{repo.description}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

UserRepos.propTypes={
    username:PropTypes.string.isRequired,
    info:PropTypes.array.isRequired
}