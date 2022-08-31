import { all, call, fork, put, takeEvery, takeLatest} from 'redux-saga/effects';
import { LOGIN_REQUESTED } from '../../redux/reducer/AuthReducer';


function* handleLogin({username, password}) {
    try {

    } catch (error) {
        yield put()
    }
}

function* watchUserLogin() {
    yield takeLatest(LOGIN_REQUESTED, handleLogin)
}

export default function* rootSaga() {
    yield all([
        watchUserLogin(),
    ])
}