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
        path: '/about',
        name: 'About',
        icon: Person,
        component: About
    },
    {
        path: '/posts',
        name: 'Posts',
        icon: BubbleChart,
        component: Posts
    },

]

export default route
