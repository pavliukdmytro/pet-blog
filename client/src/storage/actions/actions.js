export const CURRENT_USER = "CURRENT_USER";

export const addCurrentUser = (userID) => {
    return {
        type: CURRENT_USER,
        payload: userID
    }
};

export const REMOVE_CURRENT_USER = 'LOG_OUT';

export const removeCurrentUser = () => {
    return {
        type: REMOVE_CURRENT_USER
    }
};