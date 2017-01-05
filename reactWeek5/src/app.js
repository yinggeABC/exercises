/* 入口启动文件 */
import React from "react"
import {render} from "react-dom"
import RootApp from "./containers/RootApp"
import store from "./redux/store"
import {Provider} from "react-redux"

const root = document.getElementById("app");
render(
    <Provider store={store}>
        <div>
              {console.log("hello",store.getState())}
            <RootApp/></div>
        </Provider>
        ,
    root)

