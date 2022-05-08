import React from "react";
import './MyPosts.css'
import Post from "./Post/Post";

function MyPosts() {
    return(
            <div>
                My posts
                <div>
                    New posts
                </div>
                <div>
                    <Post message="Hi, today beutifull weather"/>
                    <Post message="Thats's my second post!"/>

                </div>
            </div>
    )
}
export default MyPosts;