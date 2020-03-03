import React, {useEffect, createContext, Provider, useState} from 'react';
import {
    Route,
    BrowserRouter  as Router,
    Switch
} from 'react-router-dom';
import './App.scss';
import Header from "./Header/Header.jsx";
import Home from '../pages/Main.jsx';


const App = (props) => {
    const [token, setToken] = useState(JSON.parse(localStorage.getItem('token')));
    const userToken = createContext(token);
    
    useEffect( () => {
        const checkUser = async () => {
            if(token) {
                const response = await fetch('/auth/checkauth', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token.token}`
                    }
                });
                const data = await response.json();
                if(data.ok) {
                    props.addCurrentUser(JSON.parse(localStorage.getItem('token')));
                } else {
                    props.removeCurrentUser();
                }
            }
        };
        checkUser();
    }, []);
    
    return (
        <userToken.Provider value={props.currentUser}>
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
        </userToken.Provider>
    )
};

export default App;
