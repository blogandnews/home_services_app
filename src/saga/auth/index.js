import { all, put, takeLatest } from 'redux-saga/effects';
import FetchApi from '../../helper/Api';
import { LOGIN_REQUESTED, SUCCESS_LOGIN } from '../../redux/reducer/AuthReducer';
import { UNKNOW_ERROR } from '../../redux/reducer/ErrorReducer';


function* handleLogin({ email, password, latitude, longitude }) {
    try {
        const url = `http://192.168.1.140:8080/login-by-email`;
        const formData = { email, password, latitude, longitude };
        const { data } = yield FetchApi.post(url, formData)

        yield put({ type: SUCCESS_LOGIN, ...data.payload, isSigned: true })
    } catch (error) {
        const { statusCode, message, payload } = error.response.data;
        yield put({ type: UNKNOW_ERROR, errorMessage: message })
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