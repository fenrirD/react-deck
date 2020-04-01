import React, {Component} from 'react'
import { Route, Switch} from 'react-router-dom'

import Main from 'components/structure/main/Main'
import Header from 'components/structure/header/Header'
import SideBar from "components/structure/left/SideBar"

export default class App extends Component {
    render() {

        return (
            <div style={{display:'flex'}}>
                <Header />
                <SideBar/>
                <Main/>
            </div>

        )
    }
}

