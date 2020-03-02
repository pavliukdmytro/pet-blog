import React from 'react';
import {
    Route,
    BrowserRouter  as Router,
    Switch
} from 'react-router-dom';
import './App.scss';
import Header from "./components/Header/Header.jsx";
import Home from './pages/Main.jsx';


const App = () => {
    return (
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
    )
};

export default App;
