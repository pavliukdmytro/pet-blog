import {CREATE_POST, REMOVE_POST, SET_POSTS} from '../actions/actions';

//const defaultState = [
//    {
//        _id: '1',
//        title: 'first title',
//        body: 'Hello world!',
//        date: new Date(),
//    },
//    {
//        _id: '2',
//        title: 'second title',
//        body: 'Hello all world!',
//        date: new Date(),
//    }
//];

export default function posts(state = [], action) {
    switch (action.type) {
    case CREATE_POST:
        return [
            ...state,
            action.payload
        ];
    case REMOVE_POST:
        return state.filter((post) => post._id !== action.payload);
    case SET_POSTS:
        return action.payload;
        default:
            return state
    }
};
