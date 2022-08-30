const initState = {
    isSigned: false
}

export default function AuthReducer(state = initState, action) {
    switch (action.type) {
        case "LOGIN":
            return { ...state, isSigned: action.isSigned }
        default: 
            return { ...state }
    }
}