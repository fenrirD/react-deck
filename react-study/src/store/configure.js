import {applyMiddleware, createStore, compose} from "redux"
import modules from './modules'
import loggerMiddleware from "../shared/loggerMiddleware"
import ReduxThunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import {postSaga} from "./modules/post";

const configure = () => {
    const sagaMiddleware =  createSagaMiddleware()
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    // const store = createStore(modules, devTools)
    const store = createStore(modules, composeEnhancers(applyMiddleware( ReduxThunk, sagaMiddleware)))
    sagaMiddleware.run(postSaga)
    return store
}

export default configure
