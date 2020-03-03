const {CURRENT_USER, REMOVE_CURRENT_USER} = require('../actions/actions.js');
const initialState = {
    currentUser: {}
};

export default function currentUser(state = {}, action) {
    switch(action.type) {
    case CURRENT_USER:
        return {
            ...state,
            ...action.payload
        };
    case REMOVE_CURRENT_USER :
        return {};
    default:
        return state
    }
}