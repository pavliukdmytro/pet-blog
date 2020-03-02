import React, {useState} from 'react';
import UserSvg from '../../../images/user.svg';

import './Auth.scss';
import Authorizarion from "./Authorization/Authorization.jsx";

function Auth() {
    const [showAuth, setShowAuth] = useState(false);

    const showAuthBlock = () => {
        setShowAuth(!showAuth);
    };

    return(
        <div className="authorization-container">
            <UserSvg onClick={showAuthBlock} />
            {   showAuth &&
                <Authorizarion />
            }
        </div>
    )
}

export default Auth;
