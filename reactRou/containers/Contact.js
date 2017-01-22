/**
 * Created by MWei2 on 1/22/2017.
 */
import React, {Component} from "react"

export default class Contact extends Component{
    componentDidMount(){
        this.context.router.setRouteLeaveHook(this.props.route,this.leaveHook);
    }

    leaveHook(nextLocation){
        return "do you want to leave";
    }

    render(){
        return <h1>Contact Me</h1>
    }
}

Contact.contextTypes = {
    router:React.PropTypes.object
}
