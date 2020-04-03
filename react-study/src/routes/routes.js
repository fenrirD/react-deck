import {Dashboard, Person} from "@material-ui/icons"
import LibraryBooks from "@material-ui/icons/LibraryBooks"
import BubbleChart from "@material-ui/icons/BubbleChart"
import LocationOn from "@material-ui/icons/LocationOn"
import Notifications from "@material-ui/icons/Notifications"
import Unarchive from "@material-ui/icons/Unarchive"
import Language from "@material-ui/icons/Language"
import {NavLink} from "react-router-dom"
import React from "react"
import {Home, About, Posts} from 'pages'
import AboutContainer from '../pages/AboutContainer'
import PostContainer from "../pages/PostContainer";

const route = [
    {
        path: '/',
        name: 'Home',
        icon: Dashboard,
        component: Home
    },
    {
        path: '/about/lsy',
        param: '/about/:name',
        name: 'About lsy',
        icon: LibraryBooks,
        component: About
    },
    {
        path: '/redux',
        name: 'redux',
        icon: LocationOn,
        component: () => <AboutContainer  />
    },
    {
        path: '/about',
        name: 'About',
        icon: Person,
        component: About
    },
    {
        path: '/posts/1',
        param: '/posts/:id',
        name: 'Posts Id',
        icon: BubbleChart,
        component: () => <PostContainer/>
    },
    {
        path: '/posts',
        name: 'Posts',
        icon: BubbleChart,
        component: Posts
    },

]

export default route
