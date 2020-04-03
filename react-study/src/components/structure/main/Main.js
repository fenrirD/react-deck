import React from "react"
import {makeStyles} from '@material-ui/core'
import {Route, Switch} from "react-router-dom"
import routes from 'routes/routes'
import {Posts} from "../../../pages";


const useStyles = makeStyles((theme) => ({

    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
}))

export default function Main() {
    const classes = useStyles()
    const renderRoute = () => (
            <Switch>
            {routes.map( route => (
                    <Route exact path={route.param? route.param : route.path} component={route.component} key={route.name}/>
            ))}
            </Switch>

    )
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            {renderRoute()}

        </main>
    )
}
