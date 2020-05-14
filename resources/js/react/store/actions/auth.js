import * as actionTypes from './actionsTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, accountHolderId, accounts) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token
    }
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error
    };
};

export const logoutStart = () => {
    return {
        type: actionTypes.LOGOUT_START
    }
};

export const logoutSuccess = () => {
    return {
        type: actionTypes.LOGOUT_SUCCESS
    }
};

export const logoutFail = () => {
    return {
        type: actionTypes.LOGOUT_FAIL
    }
};

export const logout = (token = null) =>  {
    return dispatch => {
        dispatch(logoutStart());

        if(token !== null) {
            axios.delete('/v1/logout', {
                headers: {
                    Authorization: "Bearer " + token
                }
            }).then(meResponse => {
                sessionStorage.clear();

                dispatch(logoutSuccess())
            }).catch(err => {
                sessionStorage.clear();

                dispatch(logoutSuccess())
            });
        } else {
            sessionStorage.clear();

            dispatch(logoutSuccess())
        }
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

export const auth = (email, password) => {
    return async dispatch => {
        dispatch(authStart());

        let response = null;

        try {
            response = await axios.post('/v1/login', {
                email,
                password
            });
        } catch (err) {
            if(err.response.data) {
                return dispatch(authFail(err.response.data.error));
            } else {
                return dispatch(authFail({
                    code: 99,
                    description: "Server error"
                }));
            }
        }

        const token = response.data.token;

        const expiresIn = 6000; //SECONDS
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);

        sessionStorage.setItem('token', token);
        sessionStorage.setItem('expirationDate', expirationDate);

        dispatch(authSuccess(
            token,
        ));

        dispatch(checkAuthTimeout(expiresIn));
    };
};

export const authCheckState = () => {
    return dispatch => {
        const token = sessionStorage.getItem('token');
        if(!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(sessionStorage.getItem('expirationDate'));

            dispatch(authSuccess(
                token
            ));

            dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
        }
    }
};
