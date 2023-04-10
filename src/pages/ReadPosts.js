import React, { useState, useEffect } from 'react';
import Card from '../components/Card';


const ReadPosts = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(props.data);
    }, [props]);
    
    return (
        <div className="ReadPosts">
            {
                posts && posts.length > 0 ?
                posts.map((post,index) => 
                   <Card key={post.id} id={post.id} title={post.title} author={post.author} description={post.description} betCount={post.betCount}/>
                ) : <h3 className="noResults">{'No Avengers Yet 😞'}</h3>
            }
        </div>  
    )
}

export default ReadPosts;