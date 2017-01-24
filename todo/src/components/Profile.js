/**
 * Created by weimin on 17-1-24.
 */
import React,{Component} from "react"
import Notes from "./Notes"
import UserRepos from "./UserRepos"
import UserProfile from "./UserProfile"
import getGithubInfo from "../utils/getGithubInfo"
export default class Profile extends Component{
    constructor(props) {
        super(props)
        this.state = {
            info: {
                name: "yinggeABC"
            },
            repos: [],
            notes: []
        }
    }

        componentDidMount(){
            this.update(this.props.username);
        }

        componentWillReceiveProps(nextProps,nextState) {
            const username = nextProps.params.username;
            this.update(username);
        }


      update(username){
        getGithubInfo(username).then(data=>{
            this.setState({
                info:data.userInfo,
                repos:data.userRepos
            })
        })
    }

    render(){
        const {username} = this.props.params;
        return (
            
            <div className="row">
                <div className="col-md-4"><UserProfile username={username} info={this.state.info}></UserProfile></div>
                <div className="col-md-4"><UserRepos username={username} repos={this.state.repos}></UserRepos></div>
                <div className="col-md-4"><Notes username={username} notes={this.state.notes}></Notes></div>
            </div>
        )
    }
}