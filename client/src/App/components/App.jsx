import React, {useEffect, useState} from 'react';
import {
    Route,
    BrowserRouter  as Router,
    Switch
} from 'react-router-dom';

import './App.scss';
import Header from "../containers/Header/Header.js";
import Home from '../pages/Main.jsx';
import CreatePost from "../pages/CreatePost.jsx";

const App = (props) => {
    let user = localStorage.getItem('user');
    if(user){
        user = JSON.parse(user);
    }

    useEffect( () => {
        const checkUser = async () => {
            try{
                const response = await fetch('/auth/checkauth', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${user.token}`
                    }
                });
                const data = await response.json();
                if(data.ok) {
                    props.addCurrentUser(user);
                }
                else {
                    props.removeCurrentUser();
                    localStorage.removeItem('user');
                }
                //alert(123);
            } catch (err) {
                console.error(err);
                props.removeCurrentUser();
                localStorage.removeItem('user');
            }
        };
        if(user){
            checkUser();
        }
    }, []);

    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/create-post" exect>
                    <CreatePost />
                </Route>
                <Route path="/" exect>
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
};

export default App;
