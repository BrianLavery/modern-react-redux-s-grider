import React from 'react'
import usePosts from './210-custom-hooks-usePosts'

export default function App() {
    // Add in code here to use the 'usePosts' hook.
    const posts = usePosts()
    
    const renderedPosts = posts.map((post) => {
        return <li key={post.id}>{post.title}</li>;
    });
    
    return (
        <div>
            <h3>Posts</h3>
            <ul>{renderedPosts}</ul>
        </div>
    );
};