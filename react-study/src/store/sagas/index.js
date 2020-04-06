import {postSaga} from "../modules/post";
import {reduxSaga} from "../modules/reduxStudyLists";


import { call, put, fork, takeEvery, take, all } from 'redux-saga/effects'

export default function* rootSagas() {
    yield all([postSaga(),reduxSaga()])


}
