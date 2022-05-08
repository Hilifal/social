import React from "react";
import './Section.css'
import MyPosts from "./MyPosts/MyPosts";
function Profile() {
    return(
        <div className="section">
            <img src="https://pr0.zoon.ru/Up-ThCSlOd370sB7ujdYPQ/1800x400,q90/4px-BW84_n0HWNo1_ujaxh5nAMe0nuwK2alFNJ62F-JRdaqDVirR0BBN9rys2C4VpX8E8v32GQvt8eN5LWgC8A" alt=""/>
            <div>
                ava+discription
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove post</button>
            </div>
            <MyPosts/>
        </div>

    )
}
export default Profile;