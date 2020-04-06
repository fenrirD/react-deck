import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import {CssBaseline} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
    },
}));

const Login = ({match}) => {
    const classes = useStyles();
    console.log('로그인페이지')
    return (
        <div className={classes.root}>
        <CssBaseline/>
            <Paper />
        </div>
    )
}

export default Login
