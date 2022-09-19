
const initState = {
    token: null
};

export const REGISTER_REQUESTED = "REGISTER_REQUESTED";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";

export default function RegisterReducer(state = initState, action) {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return { ...state, token: action.token }
        default:
            return { ...state }
    }
}