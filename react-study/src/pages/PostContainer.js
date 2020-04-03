import React, {Component} from "react";
import {connect} from 'react-redux'
import {bindActionCreators} from "redux"
import * as postActions from "../store/modules/post"
import Post from "./Post"

class PostContainer extends Component {
    handleChange = e => {
        console.log(this.props)
        const { PostActions } = this.props
        PostActions.changeInput(e.target.value)
    }
    render() {
        console.log(this.props)
        const {input} = this.props
        return <Post onChange={this.handleChange} input={input}/>
    }


}

export default connect(
    (state) => ({
        input: state.post.input
    }),
    dispatch => ({
        PostActions: bindActionCreators(postActions, dispatch)
    })
)(PostContainer)

