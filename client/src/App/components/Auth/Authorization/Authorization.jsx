import React, {useState} from 'react';
import MaskedInput from 'react-text-mask';
import emailMask from 'text-mask-addons/dist/emailMask';

import './Authorization.scss';

function Authorizarion(props) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    async function sendPostData() {
        if(userName === '' || password === '') {
            setErrorMessage('все поля должны быть заполнены');
            return;
        }
        setErrorMessage('');

        const response = await fetch('/auth/authorization', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({userName, password})
        });
        const data = await response.json();

        if(data.ok) {
            const {token, userId, userName} = data;
            setMessage(data.message);
            props.addCurrentUser({token, userId, userName});
            localStorage.setItem('user', JSON.stringify({token, userId, userName}));
        } else {
            setErrorMessage(data.error);
        }
    };
    //console.log(props);

    return(
        <div className="authorization">
            {
                message && <p className="message">{message}</p>
            }
            {
                errorMessage && <p className="message-error">{errorMessage}</p>
            }
            <MaskedInput
                mask={emailMask}
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="email"
            ></MaskedInput>
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
