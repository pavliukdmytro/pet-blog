import React, {useState} from 'react';

function Registration() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');

    const [message, setMessage] = useState('my message');
    const [errorMessage, setErrorMessage] = useState('my error');

    function sendPostData() {
        if(name === '' || password === '' || confirmPassword === '') {
            setErrorMessage('все поля должны быть заполнены');
            return;
        } else if(password !== confirmPassword) {
            setErrorMessage('пароли не совпадают');
            return;
        }
        setErrorMessage('');

        fetch('/auth/registration', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name, password})
        })
    }

    return (
        <div>
            {
                message && <p className="message">{message}</p>
            }
            {
                errorMessage && <p className="message-error">{errorMessage}</p>
            }

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
