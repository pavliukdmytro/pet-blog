import React from 'react';
import Posts from '../containers/Posts/Posts.js';

function Home(props) {
    console.log(props);
    return (
        <div className="container">
            <Posts />
        </div>
    )
}

export default Home;
