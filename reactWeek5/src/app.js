/* 入口启动文件 */
import React,{Component} from "react"
import ReactDOM,{render} from "react-dom"
import RootApp from "./containers/RootApp"
import {Provider} from "react-redux";
import store from "./redux/reducers";

const root = document.getElementById("app")
render(
    <Provider store = {store}>
        <RootApp/>
        </Provider>,
    root);

