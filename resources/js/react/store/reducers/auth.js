import * as actionTypes from '../actions/actionsTypes';

const initialState = {
    token: null,
    error: null,
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return {
                ...state,
                error: null,
                loading: true
            };
        case actionTypes.AUTH_SUCCESS:
            const defaultAccount = action.accounts.filter(account => account.defaultAccount);

            return {
                ...state,
                token: action.token,
                error: null,
                loading: false
            };
        case actionTypes.AUTH_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        case actionTypes.LOGOUT_START:
            return state;
        case actionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                token: null,
            };
        case actionTypes.LOGOUT_FAIL:
            return state;
        default:
            return state;
    }
};

export default reducer;
