import { all, put, takeLatest } from "redux-saga/effects";
import { REGISTER_REQUESTED, REGISTER_SUCCESS } from "../../redux/reducer/RegisterReducer";
import { UNKNOW_ERROR } from "../../redux/reducer/ErrorReducer";
import Api from "../../helper/Api";


function* handleRegister({email, phone, name, password, companyId, address, latitude, longitude}) {
    try {
        const url = `http://192.168.1.140:8080/register`;
        const data = { email, phone, name, password, companyId, address, latitude, longitude };

        const userInfo = yield Api.post(url, data);

        yield put({type: REGISTER_SUCCESS, userInfo})
    } catch (error) {
        yield put({type: UNKNOW_ERROR, errorMessage: error})
    }
}

function* watchUserRegister () {
    yield takeLatest(REGISTER_REQUESTED, handleRegister)
}

export default function* rootSaga() {
    yield all([
       watchUserRegister() 
    ])
}