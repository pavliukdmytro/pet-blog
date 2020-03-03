import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring';

import './AuthContainer.scss';
import Authorization from './Authorization/Authorization.jsx';
import Registration from './Registration/Registration.jsx';

function AuthContainer() {
    const springProps = useSpring({
        opacity: 1,
        from: {
            opacity: 0
        }
    });
    const [showForm, setShowForm] = useState(false);

    function checkboxHandler() {
        setShowForm(!showForm);
        // console.log(showForm);
    };
    return(
        <animated.div style={springProps} className="auth-container">
            <div className="auth-container-menu">
                <input type="radio" id="Authorization-checkbox" checked={!showForm} name="authContainer" onChange={checkboxHandler}/>
                <label htmlFor="Authorization-checkbox">Authorization</label>
                <input type="radio" id="Registration-checkbox" checked={showForm} name="authContainer" onChange={checkboxHandler}/>
                <label htmlFor="Registration-checkbox">Registration</label>
            </div>
            {
                showForm ?
                    <Registration /> :
                    <Authorization />
            }
        </animated.div>
    )
}

export default AuthContainer;
