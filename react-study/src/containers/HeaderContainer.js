import React, {Component} from "react"
import {connect} from 'react-redux'
import * as loginDialogActions from "../store/modules/loginDialog"
import {bindActionCreators} from "redux";
import Header from "../components/structure/header/Header";
import LoginDialogContainer from "./LoginDialogContainer";

class HeaderContainer extends Component {

    handleOpenDialog =() => {
        console.log('handle')
        const {LoginDialogActions} = this.props
        LoginDialogActions.openDialog(true)
    }

    renderLoginDialogContainer = () =>{
        const {open} = this.props
        console.log(this.props)

        return (
            <LoginDialogContainer open={open}/>
        )

    }
    render() {
        const {LoginDialogActions} = this.props
        console.log(LoginDialogActions, this.props)
        return (
            <div>
               <Header openDialog={LoginDialogActions.openDialog}/>
               {this.renderLoginDialogContainer()}
            </div>
        )
    }
}

export default connect(
    ({loginDialog}) => ({
        open: loginDialog.open
    }),
    dispatch => ({
        LoginDialogActions: bindActionCreators(loginDialogActions,dispatch)
    })
)(HeaderContainer)
