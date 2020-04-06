import React, {Component} from 'react'

import Main from 'components/structure/main/Main'
import {Home, About, Posts, Login} from 'pages'
import {Route, Switch} from "react-router-dom";



export default class App extends Component {
    componentDidMount() {
        console.log('component')
        console.log(this.props)

    }


    render() {
        return (
                <div>
                    <Switch>
                        <Route exact path={'/login'} component={Login}/>
                        <Route path={'/'} component={Main}/>
                    </Switch>
                </div>
        )
    }
}

