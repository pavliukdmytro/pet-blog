import React from 'react';
import './Posts.scss';

function Posts(props) {
    const {posts} = props;
    // console.log(props);
    return(
        <div className="posts">
            <h1>Posts</h1>
            {
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

                                </span>
                                <span>
                                    {post.date.toString()}
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
