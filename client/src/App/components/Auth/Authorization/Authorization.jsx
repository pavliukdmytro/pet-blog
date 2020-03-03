import React, {useState} from 'react';

import './Authorization.scss';

function Authorizarion() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    function sendPostData() {

    }

    return(
        <div className="authorization">
            <input type="text"
                   value={name}
                   onChange={(e) => setName(e.target.value)}
                   placeholder="name"
            />
            <input type="password"
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                   placeholder="password"
            />
            <button className="submit" onClick={sendPostData}>
                Регистрация
            </button>
        </div>
    )
}

export default Authorizarion;
