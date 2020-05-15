import * as actionTypes from './actionsTypes';
import Message from "../../models/Message";

export const sendMessageStart = () => {
    return {
        type: actionTypes.SEND_MESSAGE_START
    }
}

export const sendMessageSuccess = (message, responseMessage, token = null) => {
    return {
        type: actionTypes.SEND_MESSAGE_SUCCESS,
        message,
        responseMessage,
        token
    }
}

export const sendMessageFail = (error) => {
    return {
        type: actionTypes.SEND_MESSAGE_FAIL,
        error
    }
}


/***********************************FUNCTIONS************************************/
export const sendMessage = (message, token = null) => {
    return async dispatch => {
        dispatch(sendMessageStart());
        let response = null;

        try {
            response = await axios.post('/api/v1/send-message', {
                message
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        } catch (err) {
            return dispatch(sendMessageFail(err.data.error));
        }

        dispatch(sendMessageSuccess(
            new Message('user', message),
            new Message('bot', response.data.message),
            response.data.token ?? token
        ));
    };
};
