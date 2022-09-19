const initState = {
    errorMessage: null
}

export const UNKNOW_ERROR = "UNKNOW_ERROR";
export const RESET_ERROR = "RESET_ERROR";

export default function ErrorReducer (state = initState, action) {
    switch (action.type) {
        case UNKNOW_ERROR:
            return { ...state, errorMessage: action.errorMessage };

        case RESET_ERROR:
            return {...state, errorMessage: null}
        default:
            return { ...state }
    }
}