import React, {useEffect, useState} from 'react';
import {
    Route,
    BrowserRouter  as Router,
    Switch
} from 'react-router-dom';
import './App.scss';
import Header from "../containers/Header/Header.js";
import Home from '../pages/Main.jsx';
import {AuthContext} from '../../context/auth.context.js';


const App = (props) => {
    let user = localStorage.getItem('user');
    if(user){
        user = JSON.parse(user);
    }

    useEffect( () => {
        const checkUser = async () => {
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
                } else {
                    props.removeCurrentUser();
                }

        };
        if(user){
            checkUser();
        }
    }, []);

    return (
        <AuthContext.Provider value={{token: 'token'}}>
            <Router>
                <Header />
                <Switch>
                    <Route path="/test" exect>
                        test page!!!
                    </Route>
                    <Route path="/" exect>
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </AuthContext.Provider>
    )
};

export default App;
