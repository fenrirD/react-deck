import {createAction, handleActions} from "redux-actions"

const initialState = {
    lists: [
        {
            title: 'Redux - Title 1',
            content: 'Redux - Content 1',
            img: 'public/logo192.png'
        },
        {
            title : 'Redux - Title 2',
            content: 'Redux - Content 2',
            img: 'public/logo192.png'
        },
        {
            title: 'Redux - Title 3',
            content: 'Redux - Content 3',
            img: 'public/logo192.png'
        },
        {
            title : 'Redux - Title 4',
            content: 'Redux - Content 4',
            img: 'public/logo192.png'
        },
    ]
}

export default handleActions({},
    initialState
)


