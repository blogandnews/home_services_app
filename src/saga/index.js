import { all } from "redux-saga/effects";
import Authentication from '../saga/auth/index';
import Registration from '../saga/register/index';

export default function* rootSaga() {
    yield all([
        Authentication(),
        Registration()
    ]);
}