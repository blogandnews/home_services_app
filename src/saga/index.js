import { all } from "redux-saga/effects";
import Authentication from '../saga/auth/index';

export default function* rootSaga() {
    yield all([
        Authentication()
    ]);
}