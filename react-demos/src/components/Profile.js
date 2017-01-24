import React,{Component,PropTypes} from "react"
class Profile extends Component{
    render(){
        let {name,id} = this.props;
        return (
            <div><img src="" alt=""/>
                <h1>{name}</h1>
                <h2>{id}</h2>
            </div>
        )
    }
}

Profile.propTypes = {
    name:PropTypes.string.isRequired,
    id:PropTypes.number.isRequired
}

Profile.defaultProps = {
    name:"weiwei",
    id:222
}

export default Profile;