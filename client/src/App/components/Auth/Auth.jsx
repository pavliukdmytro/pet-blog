import React, {useState, useEffect} from 'react';
import UserSvg from '../../../images/user.svg';

import './Auth.scss';
import AuthConteiner from "./AuthContainer.jsx";

function Auth() {
    const [showAuth, setShowAuth] = useState(false);

    const showAuthBlock = () => {
        setShowAuth(!showAuth);
    };

    const checkAnotherClick = (e) => {
        // console.log(e.target);
        if(!e.target.closest('.auth-container')) {
            setShowAuth(false);
        }
    };

    useEffect(() => {
        if(showAuth) {
            document.addEventListener('click', checkAnotherClick);
        }
        return () => document.removeEventListener('click', checkAnotherClick);
    }, [showAuth]);

    return(
        <div className="authorization-container">
            <UserSvg onClick={showAuthBlock} />
            {   showAuth &&
                <AuthConteiner />
            }
        </div>
    )
}

export default Auth;
