import React from 'react';
import {
    Route,
    BrowserRouter  as Router,
    Switch
} from 'react-router-dom';
import './App.scss';
import Menu from './components/Menu/Menu.jsx';
import Home from './pages/Main.jsx';


const App = () => {
    return (
        <Router>
            <Menu />
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
