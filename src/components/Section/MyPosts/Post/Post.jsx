import React from "react";
import './Post.css'

function Post(props) {
    return(
        <div className="post">
            <img src="https://cs-site.ru/uploads/posts/2020-09/1600253903_35.jpg" alt="s"/>
            {props.message}
            <p>Like</p>
         </div>
    )
}
export default Post;