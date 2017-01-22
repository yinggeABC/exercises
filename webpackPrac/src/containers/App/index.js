/**
 * Created by MWei2 on 1/21/2017.
 */
import React,{Component} from "react"
import Header from "./Header"
import Footer from "./Footer"
export default class App extends Component{
    render(){
        return (
            <div class="app">
                <Header/>
                <Footer/>
                </div>
        )
    }
}