import {takeEvery} from "@redux-saga/core/effects";
import {put} from "redux-saga/effects";
import {loaderToFalse, loaderToTrue} from "../ActionCreators/loader.action";
import fire from "../../config/fire";
import {setWord, changeWordSuccess, deleteWordSuccess} from "../ActionCreators/vocabulary.action";

const db = fire.firestore()

function* addWord(action) {
    yield put(loaderToTrue());
    let doc = yield db.collection(action.user).doc()
    let id = doc.id;
    doc.set({word: action.word, translate: action.translate});
    yield put(setWord({id: id, word: action.word, translate: action.translate}));
    yield put(loaderToFalse());
}

function* changeWord(action) {
    yield put(loaderToTrue());
    yield db.collection(action.user).doc(action.id).set(action.word);
    action.word.id = action.id;
    yield put(changeWordSuccess(action.word));
    yield put(loaderToFalse());
}

function* deleteWord(action) {
    yield put(loaderToTrue());
    yield db.collection(action.user).doc(action.id).delete();
    yield put(deleteWordSuccess(action.id));
    yield put(loaderToFalse());
}

export default function* watchVacabulary() {
    yield takeEvery("ADD_WORD", addWord);
    yield takeEvery("CHANGE_WORD", changeWord);
    yield takeEvery("DELETE_WORD", deleteWord);
}