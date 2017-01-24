/**
 * Created by weimin on 17-1-21.
 */
import React,{Component} from "react"
import ReactDOM,{render} from "react-dom"
import Profile from "./components/Profile"

const data = {
"name":"yingge",
    "id":123
}

class App extends Component {
    render() {
        return <Profile name={data.name} id={data.id}/>
    }
}


render(<App/>,document.getElementById("app"))