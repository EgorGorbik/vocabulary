import {createStore, combineReducers, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "../Sagas";
import loaderReducer from '../Reducers/loader.reducer';
import userReducer from '../Reducers/user.reducer';
import vocabularyReducer from '../Reducers/vocabulary.reducer';

const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({
    loader: loaderReducer,
    user: userReducer,
    vocabulary: vocabularyReducer
});


export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);