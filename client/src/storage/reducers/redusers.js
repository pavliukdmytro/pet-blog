import { combineReducers } from 'redux';

import currentUser from './currentUser';
import posts from "./posts";

export const reducer = combineReducers({
    currentUser,
    posts
});


