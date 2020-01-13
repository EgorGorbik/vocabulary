import { all } from "redux-saga/effects";
import authorization from './authorization.saga';
import vacabulary from './vacabulary.saga';

export default function* rootSaga() {
    yield all([authorization(), vacabulary()]);
}