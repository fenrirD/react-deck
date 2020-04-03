import {createAction, handleActions} from "redux-actions";

const CHANGE_INPUT = 'posts/CHANGE_INPUT'

export const changeInput = createAction(CHANGE_INPUT, text => text)

const initialState  = {
    input: 'asd'
}

export default handleActions(

    {
        [CHANGE_INPUT] : (state, action) => ({
            ...state,
            input: action.payload
        })
    },
    initialState

)
