import React from "react"
import { Link, Route} from "react-router-dom"
import { Post } from "pages"

const Posts = ({match}) => {
    return (
        <div>
            <h2>Post List</h2>
            <ul>
                <li><Link to={`${match.url}/1`}>post #1</Link></li>
                <li><Link to={`${match.url}/2`}>post #2</Link></li>
                <li><Link to={`${match.url}/3`}>post #3</Link></li>
                <li><Link to={`${match.url}/4`}>post #4</Link></li>
            </ul>
            <Route exact path={match.url} render={ () => (<h3> Plz select any Post</h3>)}/>
            <Route path={`${match.url}/:id`} component={Post}/>

        </div>
    )
}
export default Posts
