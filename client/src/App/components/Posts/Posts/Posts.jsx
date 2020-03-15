import React, {useEffect} from 'react';
import moment from "moment";
import './Posts.scss';

function Posts(props) {
    const {posts, setPosts} = props;
    
    let user = localStorage.getItem('user');
    if(user){
        user = JSON.parse(user);
    } else {
        user = {token: ''}
    }
    
    const getData = async () => {
        try{
            const response = await fetch('/post/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                }
            });
            const data = await response.json();
            console.log(data);
            setPosts(data);
        } catch (err) {
            console.error(err);
        }
    };
    
    useEffect(() => {getData()},[]);
    
    return(
        <div className="posts">
            <h1>Posts</h1>
            {   posts.length &&
                posts.map((post) => {
                    return (
                        <div className="post-container" key={post._id}>
                            <h3>
                                {post.title}
                            </h3>
                            <div>
                                {post.body}
                            </div>
                            <div className="post-container__footer">
                                <span>
                                    {post.owner.userName}
                                </span>
                                <span>
                                    {moment(post.date).startOf('hour').fromNow()}
                                </span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Posts;
