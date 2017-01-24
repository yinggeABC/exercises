/**
 * Created by weimin on 17-1-24.
 */
import React,{Component,PropTypes} from "react"

export default class SearchGithub extends Component{
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        const username = this.username.value;
        this.username.value='';
        const path = `profile/${username}`;
        this.context.router.push(path);
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group col-md-7">
                        <input type="text" className="form-control" ref={ref=>{this.username=ref}}/>
                    </div>
                    <div className="form-group col-md-5">
                        <button className="btn btn-block btn-primary">
                            Search
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

SearchGithub.contextTypes={
    router:PropTypes.object
}