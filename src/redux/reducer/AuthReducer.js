const initState = {
    isSigned: false
}

export const LOGIN_REQUESTED = "LOGIN_REQUESTED";
export const SUCCESS_LOGIN = "SUCCESS_LOGIN";
export const FAILED_LOGIN = "FAILED_LOGIN"

export default function AuthReducer(state = initState, action) {
    switch (action.type) {
        case SUCCESS_LOGIN:
            return { ...state, isSigned: action.isSigned }
        default: 
            return { ...state }
    }
}