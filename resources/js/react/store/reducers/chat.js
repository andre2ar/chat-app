import * as actionTypes from '../actions/actionsTypes';

const initialState = {
    messages: [],
    error: null,
    loading: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEND_MESSAGE_START:
            return {
                ...state,
                loading: true,
            };
        case actionTypes.SEND_MESSAGE_SUCCESS:
            const messages = [...state.messages, action.message, action.responseMessage];
            return {
                ...state,
                loading: false,
                messages: messages
            };
        case actionTypes.SEND_MESSAGE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
};

export default reducer;
