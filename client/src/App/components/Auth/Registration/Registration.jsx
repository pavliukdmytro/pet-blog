import React, {useState} from 'react';
import MaskedInput from 'react-text-mask';
import emailMask from 'text-mask-addons/dist/emailMask';

function Registration(props) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');

    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    async function sendPostData(key, value) {
        if(userName === '' || password === '' || confirmPassword === '') {
            setErrorMessage('все поля должны быть заполнены');
            return;
        } else if(password !== confirmPassword) {
            setErrorMessage('пароли не совпадают');
            return;
        }
        setErrorMessage('');
        setMessage('');

       const response = await fetch('/auth/registration', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({userName, password})
        });
       const data = await response.json();
       if(data.ok) {
           setMessage(data.message);
           const {token, userId, userName} = data;
           props.addCurrentUser({token, userId, userName});
           localStorage.setItem('user', JSON.stringify({token, userId, userName}));
       } else {
           setErrorMessage(data.error);
       }
       // console.log();
        console.log(props);
    }

    return (
        <div>
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
            <input type="password"
                   value={confirmPassword}
                   onChange={(e) => setconfirmPassword(e.target.value)}
                   placeholder="confirm password"
            />
            <button className="submit" onClick={sendPostData}>
                Регистрация
            </button>
        </div>
    )
}

export default Registration;
