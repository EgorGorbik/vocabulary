import fire from "../../config/fire";
import {takeEvery} from "@redux-saga/core/effects";
import {put} from "redux-saga/effects";
import {loaderToTrue, loaderToFalse} from '../ActionCreators/loader.action';
import {setUser} from '../ActionCreators/user.action';
import {setVocabulary} from '../ActionCreators/vocabulary.action';

const db = fire.firestore()

function* register(action) {
    yield put(loaderToTrue());
    let user = yield fire.auth().createUserWithEmailAndPassword(action.user.email, action.user.password)
        .then((data) => {
            db.collection(data.user.email).doc().set({});
            return data.user
        })
        .catch((er) => {
            alert("Error: " + er.toString())
            return
        })

    if(user) {
        yield put(setUser(user));
    }
    yield put(loaderToFalse());
}

function* login(action) {
    yield put(loaderToTrue());
    let user = yield fire.auth().signInWithEmailAndPassword(action.user.email, action.user.password)
        .then((data) => {
            return data.user
        })
        .catch((er) => {
            alert("Error: " + er.toString())
            return
        })
    if(user) {
        let data = yield db.collection(action.user.email).get();
        let vocabulary = data.docs.map(doc => {
            let word = doc.data();
            word.id = doc.id;
            return word;
        });
        yield put(setVocabulary(vocabulary));
        yield put(setUser(user));
    }
    yield put(loaderToFalse());
}

export default function* watchaAthorization() {
    yield takeEvery("REGISTER_USER", register);
    yield takeEvery("LOGIN_USER", login);
}