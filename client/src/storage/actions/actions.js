/**Autorazation**/
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
/**Post**/
export const CREATE_POST = 'CREATE_POST';
export const createPost = (post) => {
    return {
        type: CREATE_POST,
        payload: post,
    }
};
export const REMOVE_POST = 'REMOVE_POST';
export const removePost = (postId) => {
    return {
        type: REMOVE_POST,
        payload: postId
    }
};
