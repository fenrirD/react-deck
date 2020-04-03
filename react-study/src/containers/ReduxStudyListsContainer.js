import React, {Component} from "react"
import {connect} from 'react-redux'
import { bindActionCreators} from "redux"
import ReduxStudyLists from "components/reduxStudy/ReduxStudyLists"
import * as reduxStudyListsActions from 'store/modules/reduxStudyLists'


class ReduxStudyListsContainer extends Component {

    render() {
        console.log(this.props)
        const { lists} = this.props
        return <ReduxStudyLists lists={lists} />
    }

}

export default connect(
    ({reduxStudyLists}) => ({
        lists : reduxStudyLists.lists
    })
)(ReduxStudyListsContainer)
