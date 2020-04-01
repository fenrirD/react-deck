import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import {CssBaseline, AppBar, Toolbar, Typography }  from "@material-ui/core"

const useStyle = makeStyles((theme) => ({
    root: {
        display: 'flex',

    },
    appbar: {
        zIndex: theme.zIndex.drawer + 1,
    },

}))

export default function Header() {
    const classes = useStyle()

    return (
        <div>
            <CssBaseline />
            <AppBar position='fixed' className={classes.appbar} >
                <Toolbar >
                    <Typography variant='h6' noWrap>
                        header
                    </Typography>

                </Toolbar>
            </AppBar>
        </div>
    )
}
