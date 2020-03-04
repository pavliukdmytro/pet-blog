import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import './PostForm.scss';

function PostForm(props) {
    const {token} = props.currentUser;
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [error, setError] = useState('my error');
    
    const createPost = async (e) => {
        try{
            e.preventDefault();
            if(title.trim() === '' || body.trim() === '') {
                setError('all fields must be filled');
                return;
            }
            setError('');
            
            const response = await fetch('/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({title, body})
            });
            const data = await response.json();
            if(!data.ok) {
                setError(data.message);
                return;
            }
            
            props.createPost({
                ...data.post
            });
            history.push('/');
            console.log(data);
        } catch (err){
            console.error(err);
        }
        
    };
    
    return(
        <form action="" className="post-form">
            <h1>Create post</h1>
            <p className="post-form__error">{error}</p>
            <input
                name={title}
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                name="body"
                id="" cols="30"
                rows="10"
                value={body}
                onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <button onClick={createPost}>create</button>
        </form>
    )
}

export default PostForm;